const express = require('express');

const{
    createPokemon,
    getAllPokemon,
    getOnePokemon,
    updatePokemon,
    deleteOnePokemon
} = require('../controllers/pokemon');

const api = express.Router();

api.route('/').get(getAllPokemon).post(createPokemon);
api.route('/:id').get(getOnePokemon).put(updatePokemon).delete(deleteOnePokemon);


module.exports = api;