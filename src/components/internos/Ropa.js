import React, {useEffect, useState} from "react";
import {app} from '../../firebase/credencial'
import RecipeReviewCard from "./targetaVenta";
function Ropa() {
    const [docus,setDocus]=useState([]);
    useEffect(()=>{
        async function consultar() {
            const docusList = await app.firestore().collection("tienda").get();
            setDocus(docusList.docs.map(doc=>doc.data()));

        }
        consultar().then();

    },[]);
    return(
        <div className='d-flex flex-wrap container justify-content-center'>
            {docus.map(item=> <RecipeReviewCard item={item}/>
            )}

        </div>

    )
}
export default Ropa;