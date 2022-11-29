import createUser from "../utils/user.utils.js";

const users = [];
let lastId = 0;

  export const createUserMock = async(cant = 50) => {
    for (let i = 0; i < cant; i++) {
      const user = createUser();
      user.id = i + 1;
      users.push(user);
    }
    lastId = cant;
    return users;
  }

  export const getUsers = (id) => {
    if (id) {
      return users.filter((user) => user.id === Number(id));
    } else {
      return users;
    }
  }

  export const addUser = async() => {
    const user = createUser();
    user.id = Number(lastId) + 1;
    lastId = user.id;
    users.push(user);
  }

  export const updateUser = async(id, data) => {
    if (users.length === 0) throw new Error("No hay data");
    let index = null;
    try {
      let usuario = users.filter((user, _index) => {
        if (user.id === Number(id)) {
          index = _index;
          return user;
        }
      })[0];
      Object.assign(usuario, data);
      users[index] = usuario;
    } catch (error) {
      console.log(error);
    }
  }

  export const deleteUser = async(id) => {
    let index = null;
    try {
      users.filter((user, _index) => {
        if (user.id === Number(id)) {
          index = _index;
        }
      });
      users.splice(index, 1);
    } catch (error) {
      console.log(error);
    }
  }

