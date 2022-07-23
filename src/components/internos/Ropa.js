import React, {useEffect, useState} from "react";
import {supabase} from '../../supabase/clientesupabase'
import InteractiveCard from "../TargetaThunbnail";
import DenseAppBar from "../BarraSeparadora";
import {BiStoreAlt} from "react-icons/bi";
import Avatar from "@mui/material/Avatar";
import DataViewDemo from '../dataView';
import '../dataview/dataviewDemo.css';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
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
            <div className='text-center' id='tienda42423'>
                <div className='d-flex justify-content-center'>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main',height:100,width:100 }}>
                    <BiStoreAlt className='cursor tiendaiconopro mt-2'/>
                </Avatar>
                </div>
                <h1>Tienda</h1>

                    <DataViewDemo/>

                    {/*docus.map(item=> <RecipeReviewCard item={item} key={item.id}/>
            )*/}

            </div>

        </div>

    )
}
export default Ropa;