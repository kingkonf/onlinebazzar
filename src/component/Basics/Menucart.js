import React from 'react'
import { Link } from 'react-router-dom';

const Menucart = ({menudata}) => {
    const mystyle ={color: "red"};
    // console.log({menudata});

    const handleGoToDetails = (productId) => {
      window.location.href = `/Details/${productId}`;
  };
  return (
   <>
   <section className="main-card--cointainer">
    
  {menudata.map((element)=>{
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
 
   </>
  )
}

export default Menucart