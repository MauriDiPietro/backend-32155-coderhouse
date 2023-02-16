import https from 'https';

const options = {
  method: 'GET',
  hostname: 'jsonplaceholder.typicode.com', 
  path: '/posts/2',                        
  headers: {}
};

const req = https.request(options, function (res) { 
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function (chunk) {
    const body = Buffer.concat(chunks);
    console.log(JSON.parse(body.toString()));
  });

  res.on('error', function (error) {
    console.error(error);
  });
});

export const httpsEjemplo1 = () => req.end();