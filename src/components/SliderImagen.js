import React from "react";
import image1 from "../images/uber cuba.jpg";
import image2 from "../images/slide1 copia.jpg";
import image3 from "../images/carruselcarreton copia.jpg";
function SliderImagen() {
    return(
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src={image1} className="d-block w-100" alt=""/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={image2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={image3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">
                </span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">
                </span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )

}
export default SliderImagen;