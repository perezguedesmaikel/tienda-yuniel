import React,{Fragment} from "react";
function Footer() {
    return(
        <Fragment>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path  fill="#7b1fa2"
                                                                                  d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
            </path></svg>
        </div>
    <footer className="w-100  d-flex  align-items-center justify-content-center flex-wrap footerverde">
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
        </Fragment>
    )

}
export default Footer;