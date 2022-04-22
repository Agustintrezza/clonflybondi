const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database'); 
const cors = require('cors');
const aeropuertoController = require('./controllers/aeropuertoController');
// const path = require('path');


// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/Copia de Clon-Flybondi/index.html'));});

//     app.use(express.static(__dirname + '/dist/Copia de Clon-Flybondi'))


const vueloController = require('./controllers/vueloController');


// Crear el servidor/aplicación de express
const app = express();

// Configurar CORS
app.use(cors());

//Settings
app.set('port', process.env.PORT  || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
//Routes


// GET 
app.get('/vuelos/precio/:price', ( req, res ) => {

    vueloController.buscarPorPrecio(req, (vuelos)=> {
        // console.log(vuelos);
        res.send(vuelos);
    });

    
});

// GET por todos los parametros
app.get('/vuelos/precio/:price/origen/:origen/destino/:destino/pasajeros/:pasajeros/data/:data', ( req, res ) => {

    vueloController.obtenerPorPrecioOrigenDestinoPasajerosFecha(req, (vuelos)=> {
        // console.log(vuelos);
        res.send(vuelos);
    });
    
});


// Aeropuertos
app.get('/aeropuertos/:origin', ( req, res ) => {

    aeropuertoController.obtener(req, (aeropuertos)=> {
        console.log(aeropuertos);
        res.send(aeropuertos);
    });

    
});

// app.listen(app.get('port'), 4000, () => {
//     console.log(`Servidor corriendo en el puerto ${4000}`);
// })



//http://localhost:4000/vuelos/precio/800



app.get('/', (req, res) => {
    res
      .status(200)
      .send('El servidor está corriendo!')
      .end();
  });
   
  // Start the server
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });

  // Para hacer deploy del backend a heroku    https://medium.com/geekculture/deploy-node-applications-on-heroku-a89ed51e0a34