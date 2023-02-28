import "./App.css";
import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  async function onChangeName(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  async function onChangeAge(e) {
    e.preventDefault();
    setAge(e.target.value);
  }
  async function onChangeEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  async function onChangeAvatar(e) {
    e.preventDefault();
    setAvatar(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log(name, age, email, avatar);
    try {
      const response = await axios({
        url: "http://localhost:8080/graphql",
        method: "post",
        data: {
          query: `
            mutation{
              addUser(data:{
                name: "${name}",
                age: ${age},
                email: "${email}",
                avatar: "${avatar}"
              }){
                id
                name
                age
              }
            }
          `,
        },
      });
      console.log(response);
      getAllUsers();
      alert("User add ok");
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllUsers() {
    try {
      const response = await axios({
        url: "http://localhost:8080/graphql",
        method: "post",
        data: {
          query: `
            query{
              getAllUsers{
                id
                name
                age
              }
            }
          `,
        },
      });
      console.log(response);
      setUsers(response.data.data.getAllUsers);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Lista de personas</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor='name'>Name</label>
          <input name='name' type='text' onChange={onChangeName} />
          <label htmlFor='age'>Age</label>
          <input name='age' type='number' min='1' onChange={onChangeAge} />
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' onChange={onChangeEmail} />
          <label htmlFor='avatar'>Avatar</label>
          <input name='avatar' type='url' onChange={onChangeAvatar} />
          <button type='submit'>Save</button>
        </form>
        {users.length > 0 &&
          users.map((user) => {
            return (
              <div key={`${user.id}`}>
                <br />
                {user.id}
                <br />
                {user.name}
                <br />
                {user.age}
              </div>
            );
          })}
      </header>
    </div>
  );
}

export default App;
