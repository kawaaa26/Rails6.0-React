import React from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import ProductsContainer from './ProductsContainer';
import FormContainer from './FormContainer';

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/products')
      .then((results) => {
        console.log(results)
        this.setState({products: results.data})
      })

      .catch((data) => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className='app-main'>
        <FormContainer />
        <ProductsContainer productData={ this.state.products } />
      </div>
    );
  }
}
