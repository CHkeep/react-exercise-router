import React from 'react';
import { Link } from 'react-router-dom';


class Products extends React.Component { 
  
  render() {
    return (
      <div className="products">
        <div>All Products</div>
        <Link to="/goods/1">Bicycle</Link>
        <Link to="/goods/2">TV</Link>
        <Link to="/goods/3">Pencil</Link>
       </div>      
    );
  };
}

export default  Products;