import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productsAction.js";
//CSS
import './NavBar.css';

//BARRA DE NAVEGACION DEL SITIO
function NavBar() {
  const dispatch = useDispatch();
  return (
    <div className="bar">

        <div className="nav_bar">
                <Link to='/'  onClick={e => dispatch(getProducts())} className="bar_home"> 
                    <span> Home </span>  
                </Link>
                <Link to ='/' onClick={e => dispatch(getProducts())} className="bar_shop"> 
                    <span> Shop </span>
                </Link>
        </div>
        <div className="user_bar">
                <Link to ='/' className="login"> 
                    <span> Login </span>  
                </Link>
                <Link to ='/usuario/registrarse' className="register"> 
                    <span> Registrarse </span>  
                </Link>
                <Link to ='/usuario/cart' className="cart"> 
                    <span> <i className="fas fa-shopping-cart"></i> </span>  
                </Link>
        </div>
      
    </div>
  );
};

export default NavBar;