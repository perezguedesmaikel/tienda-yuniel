import React from "react";
import equipoimg from "../images/colag.jpg";
function AcercaNosotros() {
    return(
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
    )

}
export default AcercaNosotros;