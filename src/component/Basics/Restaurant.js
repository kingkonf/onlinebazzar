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
    <div className="navbar">
      <div className="btn-group">
        {/* <button className='btn-group__item' onClick={ ()=> filterItem("web")}>breakfast</button> */}
        <a href="/" onClick={()=>filterItem("Mobile")}>breakfast</a>
        <button className='btn-group__item'  onClick={ ()=> filterItem("watch")}>lunch</button>
        <button className='btn-group__item'  onClick={ ()=> filterItem("evening")}>evening</button>
        <button className='btn-group__item'  onClick={ ()=> setMenuData(Menu)}>all</button>
      </div>
    </div>
   <Menucart menudata={menudata}/>
    </>
  )
}

export default Restaurant