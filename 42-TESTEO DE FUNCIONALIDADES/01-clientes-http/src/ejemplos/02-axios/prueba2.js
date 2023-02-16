import axios from 'axios';

const data = {
  title: 'title1',
  body: 'body of title1',
};

const url = 'https://jsonplaceholder.typicode.com/posts';

export const axiosEjemplo2 = async () => {
  try {
    const resp = await axios.post(url, data);
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};


