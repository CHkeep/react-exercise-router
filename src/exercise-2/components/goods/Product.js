import React from 'react';
import product from '../../mockups/data.json'

class  Product extends React.Component{ 
  
  render() {
   const id = this.props.match.params.id;
   debugger
   console.log("product");
   console.log(product);
    const search = {
      1:'bicycle',
      2:'TV',
      3:'pencil'
    }
    return (
      <div className="products">
        <h2>Product Details</h2>
        <p>Name:{product[search[id]].name} </p>
        <p>id:{product[search[id]].id} </p>    
        <p>price:{product[search[id]].price}</p>
        <p>quantity:{product[search[id]].quantity}</p> 
        <p>desc:{product[search[id]].desc}</p>
        <p>URL:{this.props.match.url}</p>
       </div>      
    );
  }
}

export default  Product;