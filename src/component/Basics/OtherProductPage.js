// OtherProductsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Menu from '../menuapi'; // Importing Menu assuming it's correctly defined

const OtherProductsPage = ({ category }) => {
    // Filter other products with the same category
    const { id } = useParams(); // Ensure id is a string
    const mystyle ={color: "red"};


    // Convert id to a number, since Menu.id is a number
    const productId = parseInt(id);
    const element = Menu.find((p) => p.id === productId);

    if (!element) {
        return <div>Product not found</div>;
    }

    const otherProducts = Menu.filter((product) => product.category === category);
    const handleGoToDetails = (productId) => {
        window.location.href = `/Details/${productId}`;
    };

    return (
          <section className="main-card--cointainer">
    
  {otherProducts.map((element)=>{
    return (
      <div className="card-container" key={element.id}>
    <div className="card">
        <div className="card-body">
            <span className='card-number card-circle subtle'>{element.id}</span>
            <span className='card-author subtle' style={mystyle}>{element.category}</span>
            <h2 className='card-title'>{element.name}</h2>
            <span className='card-description subtle'>
                {element.description}
            </span>
            <div className="card-read">
            <button className='card-tag subtle' onClick={() => handleGoToDetails(element.id)}>
                                    Read
                                </button>
            </div>
        </div>
        <img src={element.thumbnail} alt="images" className='card-media'/>
        {/* <video src={element.video} alt="vedio" className="card_medio"/> */}
        <button className='card-tag subtle' onClick={() => handleGoToDetails(element.id)}>
                            Order Now
                        </button>

    </div>
</div>
)

  })}

   </section>
    );
};

export default OtherProductsPage;
