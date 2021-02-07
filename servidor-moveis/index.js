const express    = require('express')
const app        = express()
const cors       = require('cors')
const bodyParser = require('body-parser') 
const mongoose   = require('mongoose')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json())


require('./src/db/connection')
require('./src/models/Comentario')
const Comentario = mongoose.model('comentarios');


const mysql = require('mysql')
const conexao = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'moveis'
})


app.get("/todos_produtos",(req,res) => {
  conexao.query("select * from todos_produtos", (error, resultado) => {
    res.json({produtos: resultado})
  })
})

app.get("/categorias", (req,res) => {
  conexao.query("select * from categorias",(error,resultado) => {
    res.json({categorias: resultado})
  })
})

app.get("/selectpedido:produto", (req,res) => {
  let produto = req.params.produto

  conexao.query(`SELECT * FROM produtos INNER JOIN precos ON precos.idPrecos = produtos.idProduto WHERE idProduto= ${produto}`,(error,result) => {
    res.json({pedido:result})
  })
})

app.post("/recebepedido",(req,res) => {
  let pedido = []
  pedido.push({
    produtoPedido: req.body.produto,
    nomeCliente: req.body.nome,
    endereco: req.body.ende,
    telefone: req.body.tele,
    quantidade: req.body.qts
  })
  conexao.query('insert into pedidos set ?',pedido,() =>{
    res.send('ok')
    console.log("Dados enviados com sucesso")
  })
})

app.get("/jsonpedido",(req,res) => {
  conexao.query('select * from ultimo_pedido',(error, result)=>{
    res.json({pedido:result})
  })
})

app.get("/comentarios", async (req,res) => {
  const comentarioResponse = await Comentario.find()
  res.json(comentarioResponse)
})

app.post("/recebecomentario", (req,res) => {
  const novoComentario = new Comentario({
    "nome": req.body.nome,
    "email": req.body.email,
    "genero": req.body.genero,
    "telefone": req.body.telefone,
    "tipo": req.body.tipo,
    "mensagem": req.body.mensagem
  })
  novoComentario.save()
  res.json({
    message: "Comentario enviado",
    comentarios: novoComentario
  })
})

app.listen(3501, () => {
  console.log('servidor ligado na 3501')
})
