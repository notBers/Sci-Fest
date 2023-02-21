import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./login.css";

export const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState(null);

    const handleUpload = async (event) => {
        event.preventDefault();
        try{
            const formData = new FormData();
            formData.append('code', id)

            const response = await fetch('http://localhost:3001/userexists', {
              method: 'POST',
              body:  formData,
          });
            const result = await response.json();
            console.log(result.message)
            if(!result.message){
                alert("This team does not exist.");
            }else{
                navigate('/'+id);
            }
          } catch (error) {
            console.error(error);
            alert('Error while checking your ID.')
          }
    }

    return(
        <>
        <form id="idform" onSubmit={handleUpload}>
            <input className='idmaker' type="text" placeholder='Write your id' onChange={(e) => setId(e.target.value)} maxLength="10"/>
            <input className='idupload' type="submit" value="submit" />
        </form>
        </>
    )

}