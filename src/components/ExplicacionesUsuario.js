import React from "react";
import desarrolloimg from "../images/ropa.jpg";
import concepto from "../images/bisuteria.jpg";
import comunicacionesimg from "../images/cel.jfif";
import seoimg from "../images/afeitar.jfif";
function ExplicacionesUsuario() {
    return(
        <section className="w-100">
            <div className="row w-75 mx-auto" id="servicios-fila-1 ">
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap " id={'margenp'}>
                    <div>
                        <img src={desarrolloimg} alt="desarrollo" width="180" height="160"/>
                    </div>


                    <div>
                        <h3 className="fs-5 mt-4 px-4 pb-1">Ropa</h3>
                        <p className="px-4">En esta sesión se muestra nuestra ropa en venta su descripción el total en
                        el inventario su talla contextura color y etc.</p>
                    </div>

                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 d-flex   my-5 icono-wrap" id={'margenp1'}>
                    <img src={concepto} alt="concepto" width="180" height="160"/>

                    <div>
                        <h3 className="fs-5 mt-4 px-4 pb-1 icono-wrap">Bisuteria</h3>
                        <p className="px-4">Aretes pulsos anillos, esclavas, cintillos y mucho mas en esta sesión...</p>
                    </div>
                </div>
            </div>

            <div className="row w-75 mx-auto mb-5" id="servicios-fila-2">
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex   my-5 icono-wrap" id={'margenp2'}>
                    <img src={comunicacionesimg} alt="comunicaciones" width="180" height="160"/>

                    <div>
                        <h3 className="fs-5 mt-4 px-4 pb-1">Accesorios</h3>
                        <p className="px-4">Micrófonos, audifonos, mouse, teclados, extensiones... </p>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap" id={'margenp3'}>
                    <img src={seoimg} alt="seo" width="180" height="160"/>

                    <div>
                        <h3 className="fs-5 mt-4 px-4 pb-1">Aseo</h3>
                        <p className="px-4">Máquinas de afeitar, cremas, bla bla bla...</p>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default ExplicacionesUsuario;