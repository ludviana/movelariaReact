const mongoose = require("mongoose");

function connect(){
  mongoose
    .connect("mongodb://localhost/moveis", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Conectado com o mongo no banco moveis')
    })
    .catch((erro) => {
      console.log(`houve um erro inesperado: ${erro}`)
    })
}

module.exports = connect()