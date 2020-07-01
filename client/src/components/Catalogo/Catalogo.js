import React from 'react';
import {Link} from 'react-router-dom';
// CSS
import "./Catalogo.css";

// Components
import CategoryFilter from '../CategoryFilter/CategoryFilter.js';
import SearchBar from '../SearchBar/SearchBar.js';
import ProductCard from './ProductCard.js';

export default function Catalogo({arrayProductos,onSearch, onFilter, categories, showCategoryOption}){
  
    //muestra todos los productos
  function showProducts(arrayProductos){
    return arrayProductos.map(product => 
    <Link to={'/producto/' + product.id} className="catalogo_product"> 
        <ProductCard product={product}/>
    </Link> );
  }; 

    return(
        
        <div className="catalogo">

            <div className="catalogo_bg"></div>

            <div className="catalogo_title">
                <h1>Shop Online</h1>
                <h5>En nuestra tienda vas a encontrar accesorios de diseño exclusivo, confeccionados a mano con una visión que conjuga moda, belleza y pasión.</h5>
            </div>

            <div className="catalogo_bar">
                <div className="volver_catalogo_bar">Volver al listado completo</div>
                <CategoryFilter onFilter={onFilter} categories={categories} showCategoryOption={showCategoryOption}/>
                <SearchBar onSearch={onSearch}/>
            </div>
            
            <div className="container">
                <div className="catalogo_products">
                    {showProducts(arrayProductos)}
                </div>
            </div>

        </div>
  );
}
