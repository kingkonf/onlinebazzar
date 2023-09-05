import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './result.css';
import menuData from '../menuapi'; // Assuming menuapi.js exports the data as an array

const Showresult = () => {
  const params = useParams();
  const { name } = params;
  console.log(name);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(menuData);
  }, []);

  // Add a click event handler to handle the "Order Now" button click
  const handleOrderNow = (orderId) => {
    // Navigate to the new page with the dynamic order ID
    // Replace 'order' with your desired route path for the order details page
    window.location.href = `/order/${orderId}`;
  };

  return (
    <>
      <section className="main-card--container">
        {data.map((element) => {
          return (
            <div className="card-container" key={element.id}>
              <div className="card">
                <div className="card-body">
                  <span className='card-number card-circle subtle'>{element.id}</span>
                  <span className='card-author subtle' >{element.category}</span>
                  <h2 className='card-title'>{element.name}</h2>
                  <span className='card-description subtle'>
                    {element.description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={element.image} alt="images" className='card-media' />
                <div className="card-read" onClick={() => handleOrderNow(element.id)}>
                  Order Now
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Showresult;
