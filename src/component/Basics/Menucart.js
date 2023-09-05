import React from 'react'
import { Link } from 'react-router-dom';

const Menucart = ({menudata}) => {
    const mystyle ={color: "red"};
    // console.log({menudata});
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
           <div className="card-read">Read</div>
          </div>
          <img src={element.image} alt="images" className='card-media'/>
          {/* <video src={element.video} alt="vedio" className="card_medio"/> */}
          <Link className='card-tag subtle' aria-current="page" to={`/Details/${element.id}`}>Order Now</Link>
        </div>
      </div>

    )

  })}

   </section>
   </>
  )
}

export default Menucart