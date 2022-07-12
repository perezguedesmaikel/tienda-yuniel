import React from "react";
import equipoimg from "../images/colag.jpg";
import Avatar from "@mui/material/Avatar";
import {BiHelpCircle } from "react-icons/bi";
import InfoInicio from "./InfoInicio";








function AcercaNosotros() {
    return(
        <section>
            <div className='text-center mb-5'>
            <div className='d-flex justify-content-center'>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main',height:100,width:100 }}>
                    <BiHelpCircle className='cursor tiendaiconopro mt-2'/>
                </Avatar>
            </div>
            <h1> ¿Quienes somos? </h1>
            </div>

            <div className="container w-50 m-auto text-center" id="equipo">
                <InfoInicio/>
                <h1 className="mb-5 fs-2">Sesión donde puedes encargar <span className="text-success">el producto deseado
                hasta tu propia puerta</span>.
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
                    <div className="wrapper-local text-center">
                        <h2>Geo-localización</h2>
                        <h2 className="text-primary mb-4" id="typewriter">

                        </h2>
                        <p className="fs-5 text-body">Elejimos a Camajuany para comenzar con este proyecto
                            por ser nuestra residencia..
                            Acceso al mapa con nustra ubicación para que te sea más facil localizarnos.</p>

                    </div>
                </div>
            </div>

        </section>
    )

}
export default AcercaNosotros;