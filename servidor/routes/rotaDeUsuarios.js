
const express = require('express');
const usuarios = require('../models/usuario');
const router = express.Router();


router.post('/criarNovo', async (req, res) => {
// codigo basico, sem tratamento de erro
  const {usuario, senha, email, cargo} = req.body
  await usuarios.create({usuario, senha, email, cargo})
});

router.post('/acharum', async (req, res) => {
    // codigo basico, sem tratamento de erro
      const {usuario, senha} = req.body
      await usuarios.findOne({where: usuario, senha})
});

module.exports = router;
