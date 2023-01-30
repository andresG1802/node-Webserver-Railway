require('dotenv').config();

const express = require('express')
const hbs = require('hbs');

const app = express()
const port= process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public'));


// app.get('/', function (req, res) {
//   res.send('Hello World')
// });

//ruta hola-mundo
app.get('/',  (req, res)=> {
    res.render('home',{
        nombre:'Fernando Herrera',
        titulo: ' Curso de Node'
    });
});

app.get('/generic',(req,res)=>{
    res.render('generic',{});
});

app.get('/elements',(req,res)=>{
    res.render('elements',{});
});

//comodin sirve cuando no se encuentra un manejador para la ruta

app.get('*',  (req, res)=> {
    //Este metodo de sendFile te pide 
    //que el path se absoluto
    res.sendFile(__dirname+ '/public/404.html');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});