import React from "react";
import './App.css';
import './estilos/estilos.css';
import image1 from './images/uber cuba.jpg';
import image2 from './images/slide1 copia.jpg';
import image3 from './images/carruselcarreton copia.jpg';
import desarrolloimg from './images/desarrollo.png';
import comunicacionesimg from './images/comunicaciones.png';
import seoimg from './images/seo.png';
import concepto from './images/concepto.png';
import equipoimg from './images/colag.jpg';
import soporte from './images/support.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AiFillCar } from "react-icons/ai";
import { AiFillHome} from "react-icons/ai";
import { AiFillEdit} from "react-icons/ai";
import { AiFillSmile} from "react-icons/ai";
import { AiFillInfoCircle} from "react-icons/ai";
import { AiFillQuestionCircle} from "react-icons/ai";
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
                            <a className="nav-link" href="#">Equipo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contactar</a>
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
            <div className="btn-group " role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Inicio</span> <AiFillHome/></button>
                <button type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Transporte</span> <AiFillCar/></button>
                <button type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Suscribirse</span> <AiFillEdit/></button>
                <button type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Choferes</span> <AiFillSmile/></button>
                <button type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Información</span> <AiFillInfoCircle/></button>
                <button type="button" className="btn btn-success btn-lg"><span className={'botonresp'}>Ayuda</span> <AiFillQuestionCircle/></button>
            </div>
            <h1 className="p-3 fs-2 border-top border-3">Una agencia única para todas tus necesidades de <span
                className="text-primary">Transportación</span></h1>
            <p className="p-3  fs-4">
                <span className="text-primary">UBER-Cuba.</span> Es la agencia donde te ayudamos establecer tu presencia
                online. Choferes: Maquinas, Coches, Bici-taxis, Triciclos, no importa tu medio de transporte, la idea es unir el
                pasajero y el vehículo de la forma más eficiente.
            </p>
        </section>
        {/*Explicaciones al Usuario=================================================================*/}
        <section className="w-100">
            <div className="row w-75 mx-auto" id="servicios-fila-1">
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">
                    <div>
                        <img src={desarrolloimg} alt="desarrollo" width="180" height="160"/>
                    </div>


                        <div>
                            <h3 className="fs-5 mt-4 px-4 pb-1">Desarrollo</h3>
                            <p className="px-4">Este sitio está desarrollado con los estándares actuales de internet, totalmente
                            responsivo y de fácil manejo, para que cualquier usuario pueda acceder a el sin importar su dispositivo
                            de navegación...</p>
                        </div>

                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 d-flex   my-5 icono-wrap">
                    <img src={concepto} alt="concepto" width="180" height="160"/>

                        <div>
                            <h3 className="fs-5 mt-4 px-4 pb-1 icono-wrap">Objetivos</h3>
                            <p className="px-4">Contribuir a la mejora de la transportación nacional, así como al ahorro de combustible
                            y tiempo de nuestros choferes y pasajeros...</p>
                        </div>
                </div>
            </div>

            <div className="row w-75 mx-auto mb-5" id="servicios-fila-2">
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex   my-5 icono-wrap">
                    <img src={comunicacionesimg} alt="comunicaciones" width="180" height="160"/>

                        <div>
                            <h3 className="fs-5 mt-4 px-4 pb-1">Comunicaciones</h3>
                            <p className="px-4">En esta sección se explica el funcionamiento de la comunicación entre el cliente y el chofer...</p>
                        </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">
                    <img src={seoimg} alt="seo" width="180" height="160"/>

                        <div>
                            <h3 className="fs-5 mt-4 px-4 pb-1">Aspectos Técnicos</h3>
                            <p className="px-4">Guía paso a paso del funcionamiento de la aplicación...</p>
                        </div>
                </div>
            </div>
        </section>
        {/*Acerca de nosotros=================================================================*/}
        <section>
            <div className="container w-50 m-auto text-center" id="equipo">
                <h1 className="mb-5 fs-2">Sesión donde puedes visualizar <span className="text-primary">los choferes que ya laboran en la comunidad</span>.
                </h1>
                <p className="fs-4 ">Siempre buscamos las personas adecuadas para que trabajen con nosotros. Si te
                    sientes listo para este reto, te esperamos para que te unas a nosotros.</p>
            </div>

            <div className="mt-5 text-center">
                <img className="img-thumbnail" id="img-equipo" src={equipoimg} alt="equipo"/>
            </div>

            <div id="local" className="border-top border-2">
                <div className="mapa">

                </div>
                <div>
                    <div className="wrapper-local">
                        <h2>Geo-localización</h2>
                        <h2 className="text-primary mb-4" id="typewriter">

                        </h2>
                        <p className="fs-5 text-body">Elejimos a Sancti Spíritus para comenzar con este proyecto
                            por ser nuestra provinsia...
                            Acceso al mapa y choferes disponibles para que tengas la oportunidad de escoger al mas cercano.</p>

                    </div>
                </div>
            </div>

        </section>
        {/*Sección contactos=================================================================*/}

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path  fill="rgb(25, 135, 84)"  d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
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
