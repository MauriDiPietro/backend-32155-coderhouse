import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

export const axiosEjemplo3 = async () => {
  try {
    const resp = await axios.delete(url);
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};


