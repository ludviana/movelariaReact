const mongoose = require("mongoose")
const Schema   = mongoose.Schema;

const Comentario = new Schema({
  nome: {
    type: String,
    require: false
  },
  genero: {
    type: String,
    require: false
  },
  email: {
    type: String,
    require: false
  },
  telefone: {
    type: String,
    require: false
  },
  tipo: {
    type:String,
    require: false
  },
  mensagem: {
    type: String,
    require: false
  },
});

mongoose.model("comentarios", Comentario)