const mongoose = require('mongoose');

const URI = 'mongodb+srv://Agustin:Pipipiazzolla760@cluster0.d6sev.mongodb.net/flybondi';


 mongoose.connect(URI)
    .then (db => console.log('DATABASE is connected'))
    .catch(err => console.error(err));


module.exports = mongoose;


require('./models/vuelos');
require('./models/aeropuertos');