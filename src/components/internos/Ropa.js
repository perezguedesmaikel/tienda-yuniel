import React, {useEffect, useState} from "react";
import {supabase} from '../../supabase/clientesupabase'
import InteractiveCard from "../TargetaThunbnail";
import DenseAppBar from "../BarraSeparadora";
import {BiStoreAlt} from "react-icons/bi";
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
        <div >
            <div className='text-center'>
                <BiStoreAlt className='cursor tiendaicono mt-2'/>
                <h1>Tienda</h1>
            <DenseAppBar/>
        <div className='d-flex flex-wrap container justify-content-center'>
            <InteractiveCard/>
            <InteractiveCard/>
            <InteractiveCard/>
            <InteractiveCard/>
            <InteractiveCard/>
            <InteractiveCard/>
            <InteractiveCard/>
            {/*docus.map(item=> <RecipeReviewCard item={item} key={item.id}/>
            )*/}

        </div>
            </div>
            <div>
                <DenseAppBar/>
                <div className='d-flex flex-wrap container justify-content-center'>

                    <InteractiveCard/>
                    <InteractiveCard/>
                    <InteractiveCard/>
                    <InteractiveCard/>
                    <InteractiveCard/>
                    <InteractiveCard/>
                    {/*docus.map(item=> <RecipeReviewCard item={item} key={item.id}/>
            )*/}

                </div>
            </div>
            <div>
                <DenseAppBar/>
                <div className='d-flex flex-wrap container justify-content-center'>

                    <InteractiveCard/>
                    <InteractiveCard/>
                    <InteractiveCard/>
                    <InteractiveCard/>
                    <InteractiveCard/>
                    <InteractiveCard/>
                    {/*docus.map(item=> <RecipeReviewCard item={item} key={item.id}/>
            )*/}

                </div>
            </div>
        </div>

    )
}
export default Ropa;