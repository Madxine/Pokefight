const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    "name": {
        type: String
    },
    "type": {
        type: String
    },
    "level": {
        type: Number
    },
    "attack": {
        type: Number
    },
    "hp": {
        type: Number
    },
    "defense": {
        type: Number
    },
    "moves": {
        type: Array
    },
    "pokedex": {
        type:Number
    },
    "url": {
        type: String
    },
    "legendary": {
        type: Boolean
    }
});

module.exports = mongoose.model("Pokemon", pokemonSchema);