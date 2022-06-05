import React,{Fragment} from "react";
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
import { BrowserRouter,Routes,
    Route } from "react-router-dom";
import Transporte from "./components/Transporte";
import Choferes from "./components/Choferes";
import Suscribirse from "./components/Suscribirse";
import Informacion from "./components/Informacion";
import Ayuda from "./components/Ayuda";
function App() {
  return (
      <BrowserRouter>
    <div>
       <Encabezado/>
        <SliderImagen/>
        <section className="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto"
                 id="intro">
           <BotonesPrincipales/>
            <H1principal/>
            {/*Area Cambiable==========================================================================================*/}
            <Routes>
                <Route path="/" element={<InfoInicio/>}/>
                <Route path="transporte" element={<Transporte/>}/>
                <Route path="choferes" element={<Choferes/>}/>
                <Route path="suscribirse" element={<Suscribirse/>}/>
                <Route path="informacion" element={<Informacion/>}/>
                <Route path="ayuda" element={<Ayuda/>}/>
            </Routes>
        </section>
           <Routes>
            <Route path="/" element={<Fragment><ExplicacionesUsuario/><AcercaNosotros/></Fragment>}/>
           </Routes>
           {/*Area Cambiable==========================================================================================*/}
           <Footer/>
    </div>
      </BrowserRouter>
  );
}

export default App;
