import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { details, index } = this.props;
    return (
      <li className="menu-item">
        <h3 className="item-name">
          {details.name}
          <span className="price">{details.price}</span>
        </h3>
        <p>{details.desc}</p>
      </li>
    )
  }
}
