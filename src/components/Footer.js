import React,{Fragment} from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import {FaWhatsappSquare} from "react-icons/fa";
import {BsPhoneVibrate} from "react-icons/bs";


function Footer() {
    return(
        <Fragment>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path  fill="#7b1fa2"
                                                                                  d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
            </path></svg>
        </div>
    <footer className="w-100    align-items-center justify-content-center  footerverde">
        <div className='d-flex justify-content-center text-light fs-1 ' > <a href="https://t.me/yuniel123" className={'anclaredes'}><AiFillTwitterCircle className='cursor'/></a>
         <a href="https://t.me/yuniel123" className={'anclaredes'}>
             <AiFillFacebook className='cursor'/></a>
            <a href="tel:+5358335533" className={'anclaredes'}><BsPhoneVibrate className='cursor'/></a>
            <a href="https://t.me/yuniel123" target='_blank' className={'anclaredes'}><FaTelegramPlane className='cursor'/></a>
        <a href="https://wa.me/5358335533" target='_blank' className={'anclaredes'} ><FaWhatsappSquare className='cursor'/></a> </div>

        <p className="fs-5 px-3  pt-3">M@ikelPro &copy; Todos Los Derechos Reservados 2022</p>

    </footer>
        </Fragment>
    )

}
export default Footer;