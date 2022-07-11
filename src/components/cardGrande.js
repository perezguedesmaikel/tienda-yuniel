import React from "react";
import CardGrandeContenido from "./CardGrandeContenido";

function CardGrande() {
    return(
        <div>
            {/*aqui!!!!!!*/}
            <div className="offcanvas offcanvas-bottom h-100 bg-primary" tabIndex="-1" id="offcanvasBottom"
                 aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>

                </div>
                <div className="offcanvas-body small d-flex flex-wrap justify-content-center " id='cuadroCierre'>
                    <div>
                        <CardGrandeContenido/>
                    </div>
                </div>

            </div>
        </div>

    )

}
export default CardGrande;





