import React,{ useState} from 'react';
import "./style.css";
import Menucart from './Menucart';
import Menu from '../menuapi';

const Restaurant = () => {

  const[menudata, setMenuData]= useState(Menu);
  const filterItem=(category)=>{
    const updatedList=Menu.filter((element)=>{
      return element.category===category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
    <div className="navbarrr">
      <div className="btn-group">
        {/* <button className='btn-group__item' onClick={ ()=> filterItem("web")}>breakfast</button> */}
        <button className='btn-group__item' onClick={()=>filterItem("home-decoration")}>home-decoration</button>
        <button className='btn-group__item'  onClick={ ()=> filterItem("fragrances")}>fragrances</button>
        <button className='btn-group__item'  onClick={ ()=> filterItem("Groceries")}>Groceries</button>
        <button className='btn-group__item'  onClick={ ()=> filterItem("smartphones")}>smartphones</button>
        <button className='btn-group__item'  onClick={ ()=> filterItem("laptops")}>laptops</button>
        <button className='btn-group__item'  onClick={ ()=> setMenuData(Menu)}>all</button>
      </div>
    </div>
   <Menucart menudata={menudata}/>
    </>
  )
}

export default Restaurant