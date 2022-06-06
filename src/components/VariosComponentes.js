import React,{Fragment} from "react";
import BotonesPrincipales from "./BotonesPrincipales";
import H1principal from "./H1Principal";
import InfoInicio from "./InfoInicio";
function VariosComponentes(){
    return(
        <Fragment>
            <section className="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto p-0"
                     id="intro">

                {/*inicio area Cambiable==========================================================================================*/}
                <InfoInicio/>
            </section>
        </Fragment>
    )
}
export default VariosComponentes;
