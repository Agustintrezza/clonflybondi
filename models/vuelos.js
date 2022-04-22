const mongoose = require('mongoose');
// const Aeropuertos = mongoose.model("aeropuertos");
mongoose.Promise = global.Promise;


const vuelosSchema = new mongoose.Schema ({
    data: {
        type: String,
        trim: true,
        required: 'La fecha es un campo obligatorio'
    },
    origin: {
        type: String,
        trim: true,
        required: 'El origen es un campo obligatorio'
    },
    destination: {
        type: String,
        trim: true,
        required: 'El destino es un campo obligatorio'
    },
    price: {
        type: Number,
        required: 'El precio es obligatorio'
    },
    availability: {
        type: Number,
    },  
    // origin_description:  {
    //      type: Aeropuertos,
    // },
    //  destination_description:  {
    //     type: Aeropuertos,
    // }

})

const vuelos = mongoose.model("vuelos", vuelosSchema);

module.exports = vuelos;