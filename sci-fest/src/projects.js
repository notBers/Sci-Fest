import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo  from "./logoitj.jpg"

export function DownloadFile() {
  const [fileUrl, setFileUrl] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      for(let i = 0; i <= 1; i++){
        const formData = new FormData();
        formData.append("num", i)
        const response = await fetch("http://localhost:3001/download", {method: "POST", body: formData});
        const blob = await response.blob();
        const fileUrls = URL.createObjectURL(blob);
        const formData1 = new FormData();
        formData1.append("num", i)
        const response1 = await fetch("http://localhost:3001/projectinfo", {method: "POST", body: formData1});
        const json = await response1.json()
        const pinfo = {url: fileUrls, name: json.name, id: json.user, views: json.views}
        setFileUrl(items => [...items, pinfo]);
      }
      console.log(fileUrl)

    };
    fetchData();
  }, []);

   return (
    <div>
      <nav>
          <a className="logo-container"><img src={Logo} alt="Logo" className="logo"/></a>
          <input type="checkbox" id="nav-toggle" className="nav-toggle"/>

          <label htmlFor="nav-toggle" className="burger-icon">
              <span className="waza"></span>
              <span className="waza"></span>
              <span className="waza"></span>
          </label>

          <ul className="navbar-links navbar-active">
             <li><Link to={"/"}>{"<"}</Link></li>
          </ul>
      </nav>
      {fileUrl && (
        <div className="con">{fileUrl?.map(dict => <Link to={"/jfj"} className="procontainer"><div className="up"><iframe src={dict.url} style={{ width: "100%", height: "500px" }}></iframe></div><div className="down"><h1>ID: {dict.id}</h1><h1>NAME: {dict.name}</h1><h1>VIEWS: {dict.views}</h1></div></Link>)}</div>     
      )}
      </div>
  );
}
