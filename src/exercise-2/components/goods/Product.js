import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
  propType = {
    Name: PropTypes.string,
  };
  render() {   
    return (
      <div>{this.product.Name}</div>      
    );
  };
}

export default  Products;