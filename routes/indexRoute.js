const express = require('express')
const router = express.Router()
const {indexController} = require('../controllers/indexController')

const visualizarIndex = (req, res) => {
    res.render('index');
};

module.exports = {visualizarIndex};