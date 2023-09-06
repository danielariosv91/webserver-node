import express from 'express';
import hbs from 'hbs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;


/** Handlebars and partials */
app.set('view engine', 'hbs'); 
hbs.registerPartials(__dirname + '/views/partials');

/** Public middleware:: static content */
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('home', {
        title: 'Webserver Node App',
        name: 'danielariosv'
    });
});

app.get('/generic', (request, response) => {
    response.render('generic', {
        title: 'Generic - Road Trip by TEMPLATED',
    });
});

app.get('/elements', (request, response) => {
    response.render('generic', {
        title: 'Elements - Road Trip by TEMPLATED',
    });
});

app.get('*', (request, response) => {
    response.send('404 page not found');
});

app.listen(port, () => {
    console.log(`Listen on ${port} port`)
});
