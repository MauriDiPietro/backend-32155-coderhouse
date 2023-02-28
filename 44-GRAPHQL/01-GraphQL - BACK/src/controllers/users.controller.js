import { v4 as uuid } from "uuid";

let users = [
  {
    id: "7",
    name: "Guillermo",
    age: 35,
    email: "email1@email.com",
    avatar: "http://www.image1.com/image1.jpg",
  },
  {
    id: "10",
    name: "Juan",
    age: 37,
    email: "email2@email.com",
    avatar: "http://www.image2.com/image2.jpg",
  },
]; 

export const addUser = ({ data })=> {
  const user = {
    id: uuid(),
    ...data,
  };
  users.push(user);
  return user;
}

export const getUser = ({ id })=> {
  const user = users.find((usr) => usr.id === id);
  return user;
}

export const editUser = ({ id, data })=> {
  let user = null;
  users.map((usr, index) => {
    if (usr.id === id) {
      let newUser = Object.assign(usr, data);
      user = newUser;
      users[index] = newUser;
    }
  });
  console.log(user);
  return user;
}

export const getAllUsers = () => {
  return users;
}

export const deleteUser = ({id}) => {
  const newArray = users.filter(user => user.id !== id);
  users = newArray;
  return true;
}
