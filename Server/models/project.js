const { Schema, model} = require('mongoose');


const Ids = new Schema({
    id: String,
    name: String,
    path: String,
    comments: Array,
    views: String
})

module.exports = model('Ids', Ids)