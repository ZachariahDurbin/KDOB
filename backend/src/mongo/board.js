const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    players: { 
        player1: String,
        player2: String
    },
    positions: {
        position1: {
            color: String,
            amount: Number
        },
        position2: {
            color: String,
            amount: Number
        },
        position3: {
            color: String,
            amount: Number
        },
        position4: {
            color: String,
            amount: Number
        },
        position5: {
            color: String,
            amount: Number
        },
        position6: {
            color: String,
            amount: Number
        },
        position7: {
            color: String,
            amount: Number
        },
        position8: {
            color: String,
            amount: Number
        },
        position9: {
            color: String,
            amount: Number
        },
        position10: {
            color: String,
            amount: Number
        },
        position11: {
            color: String,
            amount: Number
        },
        position12: {
            color: String,
            amount: Number
        },
        position13: {
            color: String,
            amount: Number
        },
        position14: {
            color: String,
            amount: Number
        },
        position15: {
            color: String,
            amount: Number
        },
        position16: {
            color: String,
            amount: Number
        },
        position17: {
            color: String,
            amount: Number
        },
        position18: {
            color: String,
            amount: Number
        },
        position19: {
            color: String,
            amount: Number
        },
        position20: {
            color: String,
            amount: Number
        },
        position21: {
            color: String,
            amount: Number
        },
        position22: {
            color: String,
            amount: Number
        },
        position23: {
            color: String,
            amount: Number
        },
        position24: {
            color: String,
            amount: Number
        },
        whitebar: {
            amount: Number
        },
        blackbar: {
            amount: Number
        },
        whiteremoval: {
            amount: Number
        },
        blackremoval: {
            amount: Number
        }
    }
});

module.exports = mongoose.model('Board', boardSchema);