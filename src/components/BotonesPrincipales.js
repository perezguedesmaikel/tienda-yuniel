import React from "react";
import {AiFillCar, AiFillEdit, AiFillHome, AiFillInfoCircle, AiFillQuestionCircle, AiFillSmile} from "react-icons/ai";
import { NavLink,Link } from "react-router-dom";
function BotonesPrincipales() {
    return(
        <div className="dropdown">
            <div className="btn-group" role="group">
                <NavLink to={"/"} type="button"  id="dropdownMenuButton1" className="btn btn-success btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className={'botonresp'}>Inicio</span> <AiFillHome/></NavLink>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link to={"/"} className="dropdown-item" href="#">Inicio <AiFillHome/></Link></li>
                    <li><Link to={"/transporte"} className="dropdown-item" href="#">Transporte <AiFillCar/></Link></li>
                    <li><Link to={"/suscribirse"} className="dropdown-item" href="#">Suscribirse <AiFillEdit/></Link></li>
                    <li><Link to={"/choferes"} className="dropdown-item" href="#">Choferes <AiFillSmile/></Link></li>
                    <li><Link to={"/informacion"} className="dropdown-item" href="#">Información <AiFillInfoCircle/></Link></li>
                    <li><Link to={"/ayuda"} className="dropdown-item" href="#">Ayuda <AiFillQuestionCircle/></Link></li>
                </ul>
            </div>
            <NavLink to="/transporte" type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Transporte</span> <AiFillCar/></NavLink>
            <NavLink to={"/suscribirse"} type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Suscribirse</span> <AiFillEdit/></NavLink>
            <NavLink to={"/choferes"} type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Choferes</span> <AiFillSmile/></NavLink>
            <NavLink to={"/informacion"} type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Información</span> <AiFillInfoCircle/></NavLink>
            <NavLink to={"/ayuda"} type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Ayuda</span> <AiFillQuestionCircle/></NavLink>
        </div>
    )

}
export default BotonesPrincipales;