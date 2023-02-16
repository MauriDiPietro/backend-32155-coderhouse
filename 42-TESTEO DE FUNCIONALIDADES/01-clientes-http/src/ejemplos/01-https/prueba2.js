import https from 'https';

const options = {
  method: 'POST',
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  headers: {
    'Content-Type': 'application/json',
  }
};

const req = https.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function (chunk) {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on('error', function (error) {
    console.error(error);
  });
});

const postData = JSON.stringify({ title: 'foo', body: 'bar', userId: 1 });

export const httpsEjemplo2 = () => {
  req.write(postData);
  req.end();
};
