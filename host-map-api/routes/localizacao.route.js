/**
 * Created by Werlon on 27/05/2017.
 */
const express = require('express');
const router = express.Router();
const LocalizacaoService = require('../services/localizacao.service');
let Localizacao = require('../model/localizacao.model');

router.get('/', (req, res, next) => {
    LocalizacaoService
        .consultar()
        .then((docs) => {
            res.status(200).json(docs);
        }, (err) => {
            res.status(500).json(err);
        });
});

router.post('/', function (req, res, next) {
    let localizacao = new Localizacao(req.body);

    console.log(localizacao);

    LocalizacaoService.salvar(localizacao).then(
        (doc) => {
            res.status(201).json(doc)
        },
        (err) => {
            res.status(500).json(err)
        });
});

router.put('/', function (req, res, next) {
    res.status(200).json({nome: "Alterado Werlon"});
});

router.delete('/', function (req, res, next) {
    res.status(200).json({nome: "Apagado Werlon"});
});

module.exports = router;