const { Schema, model} = require('mongoose');


const Ids = new Schema({
    id: String,
    name: String
})

module.exports = model('Ids', Ids)