import React from "react";
import './App.css';
import image1 from './images/uber cuba.jpg';
import image2 from './images/slide1 copia.jpg';
import image3 from './images/carruselcarreton copia.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import InfoInicio from "./components/InfoInicio";
import { AiFillCar } from "react-icons/ai";
import { AiFillHome} from "react-icons/ai";
import { AiFillEdit} from "react-icons/ai";
import { AiFillSmile} from "react-icons/ai";
import { AiFillInfoCircle} from "react-icons/ai";
import { AiFillQuestionCircle} from "react-icons/ai";
import ExplicacionesUsuario from "./components/ExplicacionesUsuario";
import AcercaNosotros from "./components/AcercaNosotros";
function App() {
  return (
    <div>
        {/*Encabezado!!!!!!!!!Probando git!============================================================*/}
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
        {/*slider imagen!!!============================================================*/}
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src={image1} className="d-block w-100" alt=""/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={image2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={image3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">
                </span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">
                </span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        {/*slider introoo=================================================================*/}
        <section className="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto"
                 id="intro">
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
            <h1 className="p-3 fs-2 border-top border-3 text-success">Una agencia única para todas tus necesidades de Transportación</h1>
            <InfoInicio/>
        </section>
        {/*Explicaciones al Usuario=================================================================*/}
        <ExplicacionesUsuario/>
        {/*Acerca de nosotros=================================================================*/}
        <AcercaNosotros/>
        {/*Sección contactos=================================================================*/}
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path  fill="rgb(25, 135, 84)"
              d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
              </path></svg>
            </div>
        <footer className="w-100  d-flex  align-items-center justify-content-center flex-wrap">
            <p className="fs-5 px-3  pt-3">M@ikelPro &copy; Todos Los Derechos Reservados 2022</p>
            <div id="iconos">
                <a href="#"><i className="bi bi-facebook">
                </i></a>
                <a href="#"><i className="bi bi-twitter">
                </i></a>
                <a href="#"><i className="bi bi-instagram">
                </i></a>
            </div>
        </footer>
    </div>
  );
}

export default App;
