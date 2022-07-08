import React, {useEffect, useState} from "react";
import {supabase} from '../../supabase/clientesupabase'
import RecipeReviewCard from "./targetaVenta";
function Ropa() {
    const [docus,setDocus]=useState([]);
    useEffect(()=>{
        async function consultar() {
            const { data, error } = await supabase.from('tienda').select();
            error&&console.log(error.message);
            setDocus(data);
        }

        consultar().then();

    },[]);
    return(
        <div className='d-flex flex-wrap container justify-content-center'>
            {docus.map(item=> <RecipeReviewCard item={item} key={item.id}/>
            )}

        </div>

    )
}
export default Ropa;