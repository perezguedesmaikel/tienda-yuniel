import React,{Fragment} from "react";
import {AiFillCar} from "react-icons/ai";
import { Link } from "react-router-dom";

function Encabezado() {
    return(
        <Fragment>
        <header className="container-fluid fondo d-flex justify-content-center">
            <p className="text-light mb-0 p-2 fs-6">Contactanos 53-58335533</p>
        </header>
    <nav className="navbar navbar-expand-lg navbar-light p-3" id="menu">

        <div className="container">

            <a className="navbar-brand" href="#">
                <span className="fs-1 testoc fw-bold ">MabrySS</span>
            </a>
            <Link to={"/transporte"} className="navbar-brand" href="#">
                <span className="fs-5   btn btn-secondary">Popular<AiFillCar className={'iconoup'}/></span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link" aria-current="page" href="#">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/choferes"} className="nav-link" href="#">Choferes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"informacion"} className="nav-link" href="#">Información</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"ayuda"} className="nav-link" href="#">Ayuda</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control" type="email" placeholder="Correo Electronico"
                           aria-label="Suscribete"/>
                    <Link to={"/suscribirse"} className="btn btn-secondary suscribetebtn" type="button">Registrate
                    </Link>
                </form>
            </div>
        </div>
    </nav>
        </Fragment>
    )

}
export default Encabezado;