import React,{Fragment} from "react";
import {AiFillCar} from "react-icons/ai";
function Encabezado() {
    return(
        <Fragment>
        <header className="container-fluid bg-success d-flex justify-content-center">
            <p className="text-light mb-0 p-2 fs-6">Contactanos 53-54157794</p>
        </header>
    <nav className="navbar navbar-expand-lg navbar-light p-3" id="menu">
        <div className="container">
            <a className="navbar-brand" href="#">
                <span className="fs-5 textoverde fw-bold">UBER-CUBA</span>
            </a>
            <a className="navbar-brand" href="#">
                <span className="fs-5   btn btn-success">Buscar Transporte<AiFillCar className={'iconoup'}/></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Choferes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Información</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ayuda</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control" type="email" placeholder="Correo Electronico"
                           aria-label="Suscribete"/>
                    <button className="btn btn-success" type="button">Suscribete
                    </button>
                </form>
            </div>
        </div>
    </nav>
        </Fragment>
    )

}
export default Encabezado;