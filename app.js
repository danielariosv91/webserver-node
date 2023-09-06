import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

/** Handlebars */
app.set('view engine', 'hbs')

/** Public middleware:: static content */
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('home');
});

app.get('/generic', (request, response) => {
    response.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (request, response) => {
    response.sendFile(__dirname + '/public/elements.html');
});

app.get('*', (request, response) => {
    response.send('404 page not found');
});

app.listen(port, () => {
    console.log(`Listen on ${port} port`)
});
