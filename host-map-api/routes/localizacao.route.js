/**
 * Created by Werlon on 27/05/2017.
 */
const express = require('express');
const router = express.Router();
const LocalizacaoService = require('../services/localizacao.service');
let localizacao = require('../model/localizacao.model');

router.get('/', (req, res, next) => {
    LocalizacaoService
    .consultar()
    .then((docs) => {
    res.status(200).json(docs);
}, (err) => {
    res.status(500).json(err);
});
});

/* GET users listing. */
//router.get('/', function(req, res, next) {
    //res.send('busca');
    //res.status(200).json({nome:"Werlon"});
   // LocalizacaoService.consultar(localizacao).then(
        //(doc) => {
       // res.status(200).json(doc)
    //},
    //(err) => {
       // res.status(500).json(err)
    //});
//});

/*router.get('/', (req, res, next) => {
    //res.send('busca');
    res.status(200).json({nome:"Werlon"});
});*/

router.post('/', function(req, res, next) {
    //res.send('cria');
    /*let localizacao = {
      query: req.body.query,
      org: req.body.org
    };*/
    let localizacao = new Localizacao(req.body);

    LocalizacaoService.salvar(localizacao).then(
        (doc)=>{
            res.status(201).json(doc)
    },
        (err)=>{
        res.status(500).json(err)
    });

    //res.status(201).json(localizacao);
});



/*router.post('/', (req, res, next) => {
    let localizacao = {
        query: req.body.query,
        org: req.body.org
    };
    res.status(201).json(localizacao);
});*/

router.put('/', function(req, res, next) {
    //res.send('altera');
    res.status(200).json({nome:"Alterado Werlon"});
});

router.delete('/', function(req, res, next) {
    //res.send('apaga');
    res.status(200).json({nome:"Apagado Werlon"});
});

module.exports = router;
