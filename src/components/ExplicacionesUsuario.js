import React from "react";
import desarrolloimg from "../images/desarrollo.png";
import concepto from "../images/concepto.png";
import comunicacionesimg from "../images/comunicaciones.png";
import seoimg from "../images/seo.png";
function ExplicacionesUsuario() {
    return(
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
    )

}
export default ExplicacionesUsuario;