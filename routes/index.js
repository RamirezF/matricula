const matricula = require('../lib/friscoboss');
const { render } = require('ejs');
var express = require('express');

var app = express.Router();
let curso = [];
let modulos = [];


/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Matrícula en Linea' });
});

// GET y POST de Curso
app.get('/curso', function(req, res, next) {
  res.render('curso', { title: 'Seleccione un curso'});
});

app.post('/curso', function(req,res,next){
  curso=[];
  console.log('Curso: '+ req.body.curso);
  curso.push(req.body.curso);
  res.render('modulos', {title: ' Ecoja al true', curso:curso});
});

// GET y POST de Módulos
app.get('/modulos', function(req,res,next){
  res.redirect('/');
});
app.post('/modulos', function(req,res,next){
  modulos=[];
  if(req.body.basico != undefined){
    modulos.push(req.body.basico);
  }
  if(req.body.intermedio != undefined){
    modulos.push(req.body.intermedio);
  }
  if(req.body.avanzado != undefined){
    modulos.push(req.body.avanzado);
  }
  console.log('modulos: '+modulos);
  res.render('pagos', {title: 'Escoja el pago'})
});

// GET y POST de Pagos
app.get('/pagos', function(req,res,next){
  res.redirect('/');
});
app.post('/pagos', function(req,res,next){
  var pagos = req.body.pago;
  console.log('Curso: '+curso);
  console.log('Módulos: '+modulos);
  console.log('Forma de pago: '+pagos);
  
  var total = matricula.totalpago(curso,pagos,modulos);
  res.render('detalles',{curso:curso,modulos: modulos, pago:pagos, total:total, title:'Detalles'});
});

// GET y POST de Detalles
app.get('/detalles', function(rerq,res,next){
  res.redirect('/');
});
app.post('/detalles', function(rerq,res,next){
  console.log('Enviado c:');
  res.render('/envio');
});

app.get('/envio', function(req,res,next){
  res.render('envio', {title:'Enviado'});
})

module.exports = app;