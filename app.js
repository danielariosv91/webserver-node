import express from 'express';
const app = express();

app.get('/', (request, response) => {
    response.send('Home');
});

app.get('/hello', (request, response) => {
    response.send('Hello World');
});

app.listen(8080);
console.log('Listen on 8080 port')