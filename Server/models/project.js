const { Schema, model} = require('mongoose');


const projects = new Schema({
    id: String,
    name: String,
    path: String,
    comments: Array,
    views: String
})

module.exports = model('projects', projects)