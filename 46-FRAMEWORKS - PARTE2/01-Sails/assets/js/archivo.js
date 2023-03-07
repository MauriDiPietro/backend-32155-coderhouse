console.log('HOLA DESDE SAILS');

io.socket.get('/books', (resData, jwres) => {
    console.log('resData--->', resData);
    console.log('jwres--_>', jwres);
})