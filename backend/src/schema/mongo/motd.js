const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const motdSchema = new Schema({
    date: String,
    message: String
});

module.exports = mongoose.model('Motd', motdSchema);