import React from "react";
import RecipeReviewCard from "./targetaVenta";
function Ropa() {
    return(

        <div className='container justify-content-center'>
            <h2 className='text-center'>Lo más vendido</h2>
         <div className='d-sm-flex justify-content-center align-items-center' id='centrado'>
            < RecipeReviewCard/>
            < RecipeReviewCard/>
             < RecipeReviewCard/>
             < RecipeReviewCard/>
         </div>
        </div>
    )
}
export default Ropa;