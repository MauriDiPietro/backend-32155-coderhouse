import got from 'got';

export const ejemploGot2 = async () => {
  const data = {
    title: 'title2',
    body: 'body of title 2',
    userId: 1,
  };

  const url = 'https://jsonplaceholder.typicode.com/posts';

  const options = {
    prefixUrl: url,
    method: 'POST',
    json: data,
  };

  try {
    const resp2 = await got(options);
    console.log(resp2.body);
    const resp = await got.post(url, { json: data });
  } catch (err) {
    console.log(err);
  }
};
