import React from "react";
import {AiFillCar, AiFillEdit, AiFillHome, AiFillInfoCircle, AiFillQuestionCircle, AiFillSmile} from "react-icons/ai";
function BotonesPrincipales() {
    return(
        <div className="dropdown">
            <div className="btn-group" role="group">
                <button type="button"  id="dropdownMenuButton1" className="btn btn-success btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className={'botonresp'}>Inicio</span> <AiFillHome/></button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Inicio <AiFillHome/></a></li>
                    <li><a className="dropdown-item" href="#">Transporte <AiFillCar/></a></li>
                    <li><a className="dropdown-item" href="#">Suscribirse <AiFillEdit/></a></li>
                    <li><a className="dropdown-item" href="#">Choferes <AiFillSmile/></a></li>
                    <li><a className="dropdown-item" href="#">Información <AiFillInfoCircle/></a></li>
                    <li><a className="dropdown-item" href="#">Ayuda <AiFillQuestionCircle/></a></li>
                </ul>
            </div>
            <button type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Transporte</span> <AiFillCar/></button>
            <button type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Suscribirse</span> <AiFillEdit/></button>
            <button type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Choferes</span> <AiFillSmile/></button>
            <button type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Información</span> <AiFillInfoCircle/></button>
            <button type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Ayuda</span> <AiFillQuestionCircle/></button>
        </div>
    )

}
export default BotonesPrincipales;