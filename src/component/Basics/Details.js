import React from 'react';
import { useParams } from 'react-router-dom';
// import Menu from '../../component/menuapi';
import Menu from '../menuapi';
const Details = () => {
    let { id } = useParams();
  
    const element = Menu.find((p) => p.id === id);
    console.log('element:', element); // Log the value of element
  
    if (!element) {
      return <div>Product not found</div>;
    }
  
    return (
      <>
      <div className="container text-center mt-5">
      <img src={element.image} alt={element.name} className="img-fluid mb-3" style={{ maxWidth: '500px', maxHeight: '500px' }} />
      <h1 className="h4">{element.company}</h1>
      <h2 className="h5 text-muted">Category: {element.category}</h2>
      <h1 className="h3">{element.name}</h1>
      <p>{element.description}</p>
      <h1 className="h4">${element.price}</h1>
    </div>
        
      </>
    );
  };
  export default Details;