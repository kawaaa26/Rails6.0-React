import React from 'react';
import ViewProduct from './ViewProduct'

export default class ProductsContainer extends React.Component {
  render() {
    return(
      <div className='productList'>
        {this.props.productData.map((data) => {
          return(
            <ViewProduct data={ data } key={ data.id } onDelete={this.props.deleteProduct} onUpdate={this.props.updateProduct} />
          )
        })}
      </div>
    )
  }
}
