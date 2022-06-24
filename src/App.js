import React,{Fragment,useState} from "react";
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ExplicacionesUsuario from "./components/ExplicacionesUsuario";
import AcercaNosotros from "./components/AcercaNosotros";
import Footer from "./components/Footer";
import SliderImagen from "./components/SliderImagen";
import Encabezado from "./components/Encabezado";
import { Routes,
    Route } from "react-router-dom";
import VariosComponentes from "./components/VariosComponentes";
import BotonesPrincipales from "./components/BotonesPrincipales";
import Transporte from "./components/internos/Transporte";
import Suscribirse from "./components/internos/Suscribirse";
import Choferes from "./components/internos/Choferes";
import Informacion from "./components/internos/Informacion";
import Ayuda from "./components/internos/Ayuda";
import H1principal from "./components/H1Principal";
import Login from "./components/Login";
function App() {
    const [logueado,setLogueado]=useState(true);
  return (

    <div>

       <Encabezado/>
        <SliderImagen/>
        <section className="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto" id={'intro2'}>
            <BotonesPrincipales/>
            <H1principal/>
        </section>
        {/*Area Cambiable==========================================================================================*/}
           <Routes>
            <Route path="/" element={<Fragment><VariosComponentes/><ExplicacionesUsuario/><AcercaNosotros/></Fragment>}/>
               {logueado?<Route path="/transporte" element={<Transporte/>}/>: <Route path="/transporte" element={<Login/>}/>}
               <Route path="/suscribirse" element={<Suscribirse/>}/>
               <Route path="/choferes" element={<Choferes/>}/>
               <Route path="/informacion" element={<Informacion/>}/>
               <Route path="/ayuda" element={<Ayuda/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path='/*' element={<h1>Error página no encontrada, pusiste mal la dirección
                   o no te has logueado aún</h1>}/>
           </Routes>
           {/*Area Cambiable==========================================================================================*/}
           <Footer/>
    </div>

  );
}

export default App;
