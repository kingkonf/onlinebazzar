import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../menuapi'; // Importing Menu assuming it's correctly defined
import 'bootstrap/dist/css/bootstrap.min.css';
import './details.css';
import OtherProductsPage from './OtherProductPage';

const Details = () => {
    const [currentSlide, setCurrentSlide] = useState(0); 
    const mystyle1 = {
        height: "700px",
        width: "900px",
   
        // alignItems: "center",
        // justifyContent: "center",
        // marginLeft: "14%",

      
    };
    const handlewarn = ()=>{
        alert("site is on working")
    }

    const h1={
        alignItems: "center",
        justifyContent: "center",
        merginLeft: "14%,"
    }
    
    

    const handleSlideChange = (newSlideIndex) => {
        setCurrentSlide(newSlideIndex);
    };

    const { id } = useParams(); // Ensure id is a string

    // Convert id to a number, since Menu.id is a number
    const productId = parseInt(id);

    const element = Menu.find((p) => p.id === productId);

    if (!element) {
        return <div>Product not found</div>;
    }

    // Filter other products with the same category
    // const otherProducts = Menu.filter((product) => product.category === element.category && product.id !== element.id);

    const images = element.images.map((image, index) => (
        <img
            src={image}
            height={100}
            width={100}
            alt={`Slide ${index + 1}`}
            key={index}
            onClick={() => handleSlideChange(index)}
        />
    ));

    return (
        <>
       
        <div className="main-product-container">
            
            <div className="productimageandtitlecontainer">
                <div className="imageslidermaincontainer">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        
                        <div className="carousel-inner">
                            {element.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${currentSlide === index ? 'active' : ''}`}
                                >
                                    <img src={image}  className="img-img" alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                       
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        <ol className="carousel-indicators">{images}</ol>
                    </div>
                </div>
            </div>


            <div className="descriptionmaincontainer">
                <span className="title">Title: {element.title}</span>
                <span className="title">Brand: {element.brand}</span>
                <span className="title">Ratings: {element.rating}</span>
                <span className="title">Available stocks: {element.stock}</span>

                <span className="newprize">
                    <span className="oldprize">&#8377;{element.price.toFixed(2)}</span>&nbsp;&nbsp;&#8377;
                    {(element.price * (1 - element.discountPercentage / 100)).toFixed(2)}
                </span>
                <ul className="para">
                    <li>{element.description}</li>
                </ul>
                <button className="button" onClick={handlewarn}>Order now</button>
            </div>
            
            
        </div>
        
            <div className='related'>
                <h1 className="h1products">Related products are</h1>
            </div>
            <OtherProductsPage category={element.category}/>
</>
        
    );
};

export default Details;
