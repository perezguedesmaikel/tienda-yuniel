import React from "react";
import {
    AiFillEdit,
    AiFillHome,
    AiFillInfoCircle,
    AiFillShopping,
    AiFillSmile
} from "react-icons/ai";
import { Link } from "react-router-dom";
function BotonesPrincipales() {
    return(
        <div className="dropdown">
            <div className="btn-group" role="group">
                <Link to={"/inicio"} type="button"  id="dropdownMenuButton1" className="btn btn-secondary fondo btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className={'botonresp'}>Inicio</span> <AiFillHome/></Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link to={"/inicio"} className="dropdown-item" href="#">Inicio <AiFillHome/></Link></li>
                    <li><Link to={"/"} className="dropdown-item" href="#">Popular <AiFillShopping/></Link></li>
                    <li><Link to={"/suscribirse"} className="dropdown-item" href="#">Suscribirse <AiFillEdit/></Link></li>
                    <li><Link to={"/choferes"} className="dropdown-item" href="#">Ropa <AiFillSmile/></Link></li>
                    <li><Link to={"/informacion"} className="dropdown-item" href="#">Información <AiFillInfoCircle/></Link></li>
                </ul>
            </div>
            <Link to="/" type="button" className="btn btn-secondary fondo btn-lg"><span className={'botonresp'}>Popular</span> <AiFillShopping/></Link>
            <Link to={"/suscribirse"} type="button" className="btn btn-secondary fondo btn-lg"><span className={'botonresp'}>Suscribirse</span> <AiFillEdit/></Link>
            <Link to={"/choferes"} type="button" className="btn btn-secondary fondo btn-lg"><span className={'botonresp'}>Ropa</span> <AiFillSmile/></Link>
            <Link to={"/"} type="button"  id="dropdownMenuButton2" className="btn btn-secondary fondo btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <span className={'botonresp'}>Información</span><AiFillInfoCircle/></Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><Link to={"/"} className="dropdown-item" href="#">Desarrollo</Link></li>
                <li><Link to={"/"} className="dropdown-item" href="#">Objetivos</Link></li>
                <li><Link to={"/suscribirse"} className="dropdown-item" href="#">Comunicaciones</Link></li>
                <li><Link to={"/choferes"} className="dropdown-item" href="#">Aspectos Técnicos </Link></li>
            </ul>
        </div>
    )

}
export default BotonesPrincipales;