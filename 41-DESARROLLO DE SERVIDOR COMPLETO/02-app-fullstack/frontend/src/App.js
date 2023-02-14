import "./App.css";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import axios from "axios";

function App() {
  const [noticias, setNoticias] = useState([]);

  async function obtenerNoticias(e) {
    e.preventDefault();
    const response = await axios.get("http://localhost:8080/news");
    if (response.status === 200) {
      setNoticias(response.data);
      console.log(response)
    }
  }

  async function generarNoticia() {
    const noticia = {
      title: faker.hacker.phrase(),
      body: faker.lorem.paragraph(),
      author: faker.name.fullName(),
      image: faker.image.avatar(),
    };
    const response = await axios.post("http://localhost:8080/news", noticia);
    if (response.status === 200) {
      setNoticias(response);
      console.log(response);
    }
  }


  return (
    <div className='App'>
      <header>
        <div>
          <label></label>
          <button onClick={obtenerNoticias}>Obtener</button>
          <button onClick={generarNoticia}>Generar</button>
          <br />
          <br />
        </div>
        <div>
          {noticias &&
            noticias.length > 0 &&
            noticias.map((noticia, index) => {
              return (
                <div key={`news${index}`}>
                  <text>{noticia.date}</text>
                  <br />
                  <img src={noticia.image} alt='' width='150px' height='150px' />
                  <h4>{noticia.title}</h4>
                  <text>{noticia.body}</text>
                  <br />
                  <br />
                </div>
              );
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
