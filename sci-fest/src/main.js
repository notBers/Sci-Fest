import React from "react";
import {Link} from "react-router-dom"
import Logo from "./logoitj.jpg"
import './App.css';

export function Main(){
    return(
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
                    <li><Link to={"/login"}>login</Link></li>
                    <li><Link to={"/projects"}>projects</Link></li>                    
                </ul>
            </nav>

            <div className="container">
                <div className="Sci-fest"><h1>Sci-Fest</h1></div>
                <div className="explicacion">
                    <div className="preguntacon">
                        <div className="pregunta derecha"><h2>Que es el <br/> Sci-Fest <br/> <img width="63" height="15" src="https://www.itj.edu.mx/zonaesmeralda/wp-content/uploads/2020/03/Rectangle-45.png" class="vc_single_image-img attachment-thumbnail" alt="" loading="lazy"/></h2></div>
                        <div className="respuesta izquierda"><h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio porro quod asperiores nulla consequatur est ipsam, maxime fugiat quisquam voluptatum doloremque nemo excepturi animi aperiam minus officia quasi voluptate tempora fugit. Exercitationem atque voluptatum fugiat cum. Omnis doloremque aut deserunt obcaecati minima et repudiandae consectetur possimus explicabo, suscipit fuga sint.</h4></div>
                    </div>
                    <div className="container2">
                        <ul className="slider">
                            <li id="slide2" className="slide3">
                                <div className="iz"><h1>Pabellones</h1></div>
                                <div className="imgs"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/sunset.jpg" alt="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/sunset.jpg"/></div>
                            </li>
                            <li id="slide3">
                                <div className="iz"><h1>Proyectos</h1></div>
                                <div className="imgs"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/sunset.jpg" alt="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/sunset.jpg"/></div>
                            </li>
                        </ul>
                        <ul className="menu">
                            <li>
                                <a href={"#slide2"}>{"<"}</a>
                            </li>
                            <li>
                                <a href={"#slide3"}>{">"}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

