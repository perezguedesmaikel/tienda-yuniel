import React from "react";
import {
    AiFillEdit,
    AiFillHome,
    AiFillInfoCircle,
    AiFillShopping,
    AiFillSmile
} from "react-icons/ai";
import { FcDataConfiguration } from "react-icons/fc";
import { Link } from "react-router-dom";
function BotonesPrincipales() {
    return(
        <div className="dropdown mb-2">
            <div className="btn-group text-light" role="group">
                <Link to={"/inicio"} type="button"  id="dropdownMenuButton1" className="btn btn-secondary fondo btn-lg dropdown-toggle text-light" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className='botonresp text-light'>Inicio</span> <AiFillHome className='text-light'/></Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link to={"/inicio"} className="dropdown-item" href="#">Inicio <AiFillHome/></Link></li>
                    <li><Link to={"/"} className="dropdown-item" href="#">Popular <AiFillShopping/></Link></li>
                    <li><Link to={"/suscribirse"} className="dropdown-item" href="#">Suscribirse <AiFillEdit/></Link></li>
                    <li><Link to={"/choferes"} className="dropdown-item" href="#">Ropa <AiFillSmile/></Link></li>
                    <li><Link to={"/item"} className="dropdown-item" href="#" >Información <AiFillInfoCircle/></Link></li>
                    <li><a href={"https://mabriss-panel.firebaseapp.com"} target='_blank' className="dropdown-item">Administrar <FcDataConfiguration/> </a></li>
                </ul>
            </div>
            <Link to="/" type="button" className="btn btn-secondary fondo btn-lg text-light"><span className={'botonresp'}>Popular</span> <AiFillShopping className={'text-light'}/></Link>
            <Link to={"/suscribirse"} type="button" className="btn btn-secondary fondo btn-lg text-light"><span className={'botonresp'}>Suscribirse</span> <AiFillEdit className={'text-light'}/></Link>
            <Link to={"/choferes"} type="button" className="btn btn-secondary fondo btn-lg text-light"><span className={'botonresp'}>Ropa</span> <AiFillSmile className={'text-light'}/></Link>
            <Link to={"/"} type="button"  id="dropdownMenuButton2" className="btn btn-secondary fondo btn-lg dropdown-toggle text-light" data-bs-toggle="dropdown" aria-expanded="false">
                <span className={'botonresp'}>Información</span><AiFillInfoCircle className={'text-light'}/></Link>
            <ul className="dropdown-menu text-light" aria-labelledby="dropdownMenuButton2">
                <li><Link to={"/"} className="dropdown-item" href="#">Desarrollo</Link></li>
                <li><Link to={"/"} className="dropdown-item" href="#">Objetivos</Link></li>
                <li><Link to={"/suscribirse"} className="dropdown-item" href="#">Comunicaciones</Link></li>
                <li><Link to={"/choferes"} className="dropdown-item" href="#">Aspectos Técnicos </Link></li>
            </ul>
        </div>
    )

}
export default BotonesPrincipales;