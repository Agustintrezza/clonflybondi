const mongoose = require("mongoose");
const Vuelo = mongoose.model("vuelos");

// buscar una vuelo por precio
exports.buscarPorPrecio = async (req, callback) => {
  const vuelos = await Vuelo.find({ price: { $lte: req.params.price } }).lean(); // la funcion puede tmb ser Vuelo.find({ precio: { $gte : price } }).lean(); para buscar por precios mayores.

  //   console.log(vuelos);
  callback(vuelos);
  // res.send(vuelos)
};

exports.obtenerPorPrecioOrigenDestinoPasajerosFecha = async (req, callback) => {
  let filter = {};
  console.log(req.params.price);

  if (req.params.price && req.params.price > 0) {
    filter.price = { $lte: req.params.price };
  }
  if (req.params.origen && req.params.origen != "null") {
    filter.origin = req.params.origen;
  }
  if (req.params.destino && req.params.destino != "null") {
    filter.destination = req.params.destino;
  }
  if (req.params.pasajeros && req.params.pasajeros > 0) {
    filter.availability = { $gte: parseInt(req.params.pasajeros) };
  }
  if (req.params.data && req.params.data != "null") {
    filter.data = req.params.data;
  }
  console.log(filter);
  const vuelos = await Vuelo.find(filter).lean();

  callback(vuelos);
};

// {
//   price: { $lte: req.params.price },   // lte = Less than equals.
//   origin: req.params.origen,
//   destination: req.params.destino,
//   availability: { $gte: req.params.pasajeros },   // gte = Grather than equals.
//   data: req.params.data
// }
