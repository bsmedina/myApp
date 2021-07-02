const express = require('express');
const router = express.Router();
const controllerServicosComDesconto = require('../controllers/listarServicosDesconto');
const controllerListarTodosServicos = require('../controllers/listarTodosServicos');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/servicos', function (req, res, next){
  const {taxaDesconto} = req.query; // Irá aparecer assim na url http://localhost:3000/servicos?taxaDesconto=10, onde o 10 é o desconto.

  const listaComDesconto = controllerServicosComDesconto.retornarListaServicos(taxaDesconto || 0);
  const listarTodos = controllerListarTodosServicos.retornarListaTodosServicos();

  res.render('index', { 
    desconto: listaComDesconto,
    listaSemDesconto: listarTodos
  });

});

module.exports = router;
