import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo  from "./logoitj.jpg"

export function Project() {
  const [fileUrl, setFileUrl] = useState([]);
  const location = useLocation();
  const paths = location.pathname.split('/'); // Split the pathname by '/'
  const lastPath = paths[paths.length - 1]; 

  useEffect(() => {
    const fetchData = async () => {
        const formData = new FormData();
        formData.append("project", lastPath)
        const response = await fetch("http://localhost:3001/downloadi", {method: "POST", body: formData});
        const blob = await response.blob();
        const fileUrls = URL.createObjectURL(blob);
        const formData1 = new FormData();
        formData1.append("project", lastPath)
        const response1 = await fetch("http://localhost:3001/projectinfi", {method: "POST", body: formData1});
        const json = await response1.json()
        const pinfo = {url: fileUrls, name: json.name, id: json.user, views: json.views}
        setFileUrl(pinfo);
        const addbyone = await fetch("http://localhost:3001/addbyone", {method: "POST", body: formData1})
    };
    fetchData();
  }, []);

   return (
    <div>
      <nav>
          <a className="logo-container"><img src={Logo} alt="Logo" className="logo"/></a>
          <ul className="navbar-active">
             <li><Link to={"/projects"}>{"<"}</Link></li>
          </ul>
      </nav>
      {fileUrl && (
        <div className="con"><div className="up"><iframe src={fileUrl.url} style={{ width: "100%", height: "500px" }}></iframe></div><div className="down"><h1>ID: {fileUrl.id}</h1><h1>NAME: {fileUrl.name}</h1><h1>VIEWS: {fileUrl.views}</h1></div></div>     
      )}
      </div>
  );
}