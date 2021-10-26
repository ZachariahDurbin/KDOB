const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    players: { 
        player1: String,
        player2: String
    },
    turn: String,
    board: [
        {
            color: String,
            amount: Number
        }
    ]

});

module.exports = mongoose.model('Board', boardSchema);