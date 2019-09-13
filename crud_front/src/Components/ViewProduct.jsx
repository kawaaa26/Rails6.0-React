import React from 'react';

export default class ViewProduct extends React.Component {

  render() {
    return(
      <div>
        <span>{ this.props.data.product }</span>
      </div>
    )
  }
}
