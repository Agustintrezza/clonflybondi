const mongoose = require("mongoose");
const Aeropuertos = mongoose.model("aeropuertos");


exports.obtener = async (req, callback) => {
const aeropuertos = await Aeropuertos.find().lean(); // la funcion puede tmb ser Vuelo.find({ precio: { $gte : price } }).lean(); para buscar por precios mayores.

//   console.log(vuelos);
  callback(aeropuertos);
  // res.send(vuelos)
};
