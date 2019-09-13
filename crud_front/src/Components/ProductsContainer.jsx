import React from 'raect';
import ViewProduct from './ViewProduct'

export default class ProductsContainer extends React.Component {
  render() {
    return(
      <div className='productList'>
        {this.props.productData.map((data) => {
          return(
            <ViewProduct data={ data } key={ data.id } />
          )
        })}
      </div>
    )
  }
}
