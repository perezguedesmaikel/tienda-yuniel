import React from "react";
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import InfoInicio from "./components/InfoInicio";
import ExplicacionesUsuario from "./components/ExplicacionesUsuario";
import AcercaNosotros from "./components/AcercaNosotros";
import Footer from "./components/Footer";
import BotonesPrincipales from "./components/BotonesPrincipales";
import H1principal from "./components/H1Principal";
import SliderImagen from "./components/SliderImagen";
import Encabezado from "./components/Encabezado";
function App() {
  return (
    <div>
        {/*Encabezado!!!!!!!!!Probando git!============================================================*/}
       <Encabezado/>
        {/*slider imagen!!!============================================================*/}
        <SliderImagen/>
        {/*slider introoo=================================================================*/}
        <section className="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto"
                 id="intro">
           <BotonesPrincipales/>
            <H1principal/>
            <InfoInicio/>
        </section>
        {/*Explicaciones al Usuario=================================================================*/}
        <ExplicacionesUsuario/>
        {/*Acerca de nosotros=================================================================*/}
        <AcercaNosotros/>
        {/*Sección contactos=================================================================*/}
           <Footer/>
    </div>
  );
}

export default App;
