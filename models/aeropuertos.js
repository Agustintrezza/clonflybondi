const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const aeropuertosSchema = new mongoose.Schema ({
    code: {
        type: String,
    },
     description:  {
         type: String,
     }
})

const aeropuertos = mongoose.model("aeropuertos", aeropuertosSchema);

module.exports = aeropuertos;