const mongoose = require('mongoose');

const project = require('./models/project');
const Ids = require('./models/Ids')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/sci-fest');
}

let names = ["John", "Cindy", "Daniel"]

let ids = [];

for (let i = 0; i < names.length; i++) {
  let randomID = Math.random().toString(36).substring(2, 10);
  ids.push(randomID);
}

let nameIDs = {};

for (let i = 0; i < names.length; i++) {
  nameIDs[names[i]] = ids[i];
}

for(let i in nameIDs){
    const newUser = new Ids({
        
        id: nameIDs[i],
        name: i
        
        })
        newUser.save((err, document) => {
            if(err) console.log(err);
            console.log('new student Created' + document)
      })
}

