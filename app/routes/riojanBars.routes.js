const express = require('express');
const router = express.Router();
//Middlewares
const { validatorBarsSite } = require('../middlewares/validator-riojanBars');
//Schema Validator 
const { schemaBarsSite } = require('../schema/schemaValidator')
//bars site controllers
const { 
        getBarsSites,
        getBarsSite,
        addBarsSite,
        editBarsSite,
        deleteBarsSite
} = require('../controllers/riojanBars.controllers'); 

//Routes
router.get('/getbars', getBarsSites);
router.get('/:id', getBarsSite);
router.post('/addbars', addBarsSite);
router.put('/:id', editBarsSite);
router.delete('/:id', deleteBarsSite);


module.exports = router;