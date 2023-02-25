import React, { useState } from 'react';
import "./pdfcss.css"
import { Link } from 'react-router-dom';
import Logo from "./logoitj.jpg"
import { useLocation } from 'react-router-dom'

export const S_i = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);
  const [exist, setExist] = useState(null);
  const location = useLocation()
  const paths = location.pathname.split('/'); // Split the pathname by '/'
  const lastPath = paths[paths.length - 1]; 

  const handleDrop = (event) => {
    event.preventDefault();

    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
    } else {
      alert('Only PDFs are allowed.');
    }
  };


  const handleDelete = async () => {

    setFile(null);
    setExist(false);
    alert('project deleted');

    const form = new FormData();
    form.append('id', lastPath)

    if(exist === true){
      const deletes = await fetch("http://localhost:3001/delete", {
        method: 'POST',
        body: form
      })
    }
};

  const handleUpload = async () => {

  if(!name){
    alert("Please set a name");
    return
  }

  const forms = new FormData();
  forms.append('id', lastPath)

  try{
    const exists = await fetch("http://localhost:3001/haswork", {
      method: "POST",
      body: forms
    })

    const ress = await exists.json()


    if(ress.message){
      alert("You already have a project, please delete it before uploading another");
      setExist(true)
      return;
    }

  }catch{
    alert('could not verify if you had previous project')
    return
  }


  
  const formData = new FormData();
  formData.append('id', lastPath)
  formData.append('file', file);
  formData.append('name', file.name);
  formData.append('project_name', name);

  try{
    const response = await fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
  });
    const result = await response.text();
    alert(result);
  } catch (error) {
    console.error(error);
    alert('Failed to upload the file.');
  }
};
  

  return (
    <>
      <nav>
          <a className="logo-container"><img src={Logo} alt="Logo" className="logo"/></a>

          <ul className="navbar-active">
             <li><Link to={"/"}>{"<"}</Link></li>
          </ul>
      </nav>

      <div
        className={`pdf-uploader ${file ? "disabled" : ""}`}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        {file ? (
          <>
            <p>PDF File: {file.name}</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleUpload}>Upload</button>
          </>
        ) : (
         
          <>
            <p>Please drag and drop your work here</p>
            <input className='namer' placeholder="What is your project's name" onChange={(e) => setName(e.target.value)}/>
          </>
         
        )}
      </div>

    </>
  );
};

