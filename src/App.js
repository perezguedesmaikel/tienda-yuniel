import React,{Fragment,useState} from "react";
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AcercaNosotros from "./components/AcercaNosotros";
import Footer from "./components/Footer";
import SliderImagen from "./components/SliderImagen";
import Encabezado from "./components/Encabezado";
import { Routes,
    Route,Link } from "react-router-dom";
import Ropa from "./components/internos/Ropa";
import Suscribirse from "./components/internos/Suscribirse";
import Choferes from "./components/internos/Choferes";
import Informacion from "./components/internos/Informacion";
import H1principal from "./components/H1Principal";
import Login from "./components/Login";
import { BiMenu } from "react-icons/bi";
import {BiStoreAlt } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import {BiHelpCircle } from "react-icons/bi";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//importaciones fuu nuevo
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import {AiFillFacebook, AiFillTwitterCircle} from "react-icons/ai";
import Canvas from "./components/Canvas";
import Badge from "@mui/material/Badge";
import Carrito from "./components/carrito";
//importaciones fuu nuevo
//const nuevas que s enecesitan foo nuevo luego se borran
const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 0,
    right: 0,
    margin: '0 auto',
    padding:0,
    height:70,
    width:70
});
const Styledo = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 140,
    right: 0,
    margin: '0 auto',
});
const Style2 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 260,
    right: 0,
    margin: '0 auto',
});
const Style3 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 0,
    right: 140,
    margin: '0 auto',
});
const Style4 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 0,
    right: 260,
    margin: '0 auto',
});
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
//const nuevas que s enecesitan foo nuevo luego se borran
function App() {
  return (

    <div className=' t280'>
        <SliderImagen/>
        <Encabezado/>
        <div className='container d-flex justify-content-center text-center'>
            <H1principal/>

        </div>
        {/*Area Cambiable==========================================================================================*/}
           <Routes>
            <Route  path="/carrito" element={<Carrito/>} basename={process.env.PUBLIC_URL}/>
               <Route  path="/suscribirse" element={<Suscribirse/>} basename={process.env.PUBLIC_URL}/>
               <Route  path="/choferes" element={<Choferes/>} basename={process.env.PUBLIC_URL}/>
               <Route  path="/ayuda" element={<AcercaNosotros/>} basename={process.env.PUBLIC_URL}/>
               <Route  path="/login" element={<Login/>} basename={process.env.PUBLIC_URL}/>
               <Route  path="/" element={<Ropa/>} basename={process.env.PUBLIC_URL} index/>
               <Route  path='*' element={<h1>Error página no encontrada, pusiste mal la dirección
                   o no te has logueado aún</h1>}/>
           </Routes>
        {/*Area Cambiable==========================================================================================*/}
           <Footer/>
        {/*foooooo nuevo----------------------------------------------------------------------------------foonuevo*/}
        <React.Fragment>
            <AppBar position="fixed" color="secondary" sx={{ top: 0, bottom: 'auto' }} id='alturabarra'>
                <Toolbar>
                    <StyledFab color="primary" aria-label="add">
                        <a href="#" className={'anclaredes'} data-bs-toggle="offcanvas"
                           data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><BiMenu  className='cursor text-light' id='menu1'/></a>
                    </StyledFab>

                    <Styledo color="secondary" aria-label="add">
                        <Link to={'/carrito'} className={'anclaredes'}>
                                <StyledBadge badgeContent={4} color="primary">
                                    <ShoppingCartIcon className='text-light'/>
                                </StyledBadge>
                            </Link>
                    </Styledo>
                    <Style2 color="secondary" aria-label="add">
                        <Link  to={'/ayuda'} className='anclaredes iconosbolas'><BiHelpCircle className='cursor'/></Link>
                    </Style2>
                    <Style3 color="secondary" aria-label="add">
                        <Link to={'/suscribirse'}  className='anclaredes iconosbolas'><AiOutlineLock className='cursor' /></Link>
                    </Style3>
                    <Style4 color="secondary" aria-label="add">
                        <Link to={'/'}  className='anclaredes iconosbolas'><BiStoreAlt className='cursor iconosbolas'/></Link>
                    </Style4>
                </Toolbar>
            </AppBar>
        </React.Fragment>
        <Canvas/>
    </div>

  );
}

export default App;
