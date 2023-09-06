import express from 'express';

const app = express();
const port = 8080;

/** Public middleware:: static content */
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send('Home');
});

app.get('/hello', (request, response) => {
    response.send('Hello World');
});

app.get('*', (request, response) => {
    response.send('404 page not found');
});

app.listen(port, () => {
    console.log(`Listen on ${port} port`)
});
