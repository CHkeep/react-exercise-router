import React from 'react';

class Products extends React.Component {
  render() {
    return (
      <div className="products">
        <div>All Products</div>
      {this.states.products.map((product) => (
      <product Id={product.Id} Name={product.Name}
       Price={product.Price} Quantity={product.Quantity} 
       Desc={product.Desc} key={product} />))}
    </div>      
    );
  };
}

export default  Products;