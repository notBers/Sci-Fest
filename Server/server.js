const express = require('express');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors")
const project = require("./models/project")
const mongoose = require("mongoose");

const app = express();

const mongoDB = "mongodb://localhost:27017/sci-fest";

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'C:\\Users\\Propietario\\OneDrive\\Documentos\\pdf-files');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ 
  storage: storage, 
  fileFilter: fileFilter 
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload.single('file'));
app.use(cors())

app.post('/upload', (req, res) => {
  
  if (!req.file) {
    return res.status(400).send('No file was uploaded or the file type is not supported.');
  }
  
  const fileName = req.file.originalname;

  const newProject = new project({id: req.body.id, name: req.body.project_name, path: "C:\\Users\\Propietario\\OneDrive\\Documentos\\pdf-files\\" + fileName});
  newProject.save((err, document) => {
    if(err) console.log(err);
    console.log('new project Created' + document)
  })
  
  res.send(`File ${fileName} was uploaded and stored as ${req.file.filename}.`);
});

app.post('/haswork', (req, res) => {

  async function evaluation(){

    const exists = await project.findOne({id: req.body.id}, {id: 1});

    console.log(exists)
 
    if(exists != null){

      res.json({message: "1"});

    }else{

      res.json({message: null});

    }

  }

  evaluation()

});

app.post('/delete', (req, res) => {

  async function evaluation1(){

    const exists = await project.deleteOne({id: req.body.id})
    console.log(exists + " was deleted")

  }

  evaluation1()

})

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});