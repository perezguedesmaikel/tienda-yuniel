import React from "react";
import ExplicacionesUsuario from "../ExplicacionesUsuario";
import InfoInicio from "../InfoInicio";
import Avatar from "@mui/material/Avatar";
import {BiHelpCircle } from "react-icons/bi";
function Ayuda() {
    return(
        <>
            <div className='text-center mb-5'>
                <div className='d-flex justify-content-center'>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main',height:100,width:100 }}>
                            <BiHelpCircle className='cursor tiendaiconopro mt-2'/>
                    </Avatar>
                </div>
                <h1> ¿Quienes somos? </h1>
            </div>
        <InfoInicio/>
       <ExplicacionesUsuario/>
            </>
    )
}
export default Ayuda;