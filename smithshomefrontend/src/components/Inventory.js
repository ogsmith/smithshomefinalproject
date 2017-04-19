import React, { Component } from 'react';
import AddItemForm from './AddItemForm';

export default class Inventory extends Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const item = this.props.items[item];
    const updatedItem = {
      ...item,
      [e.target.name]: e.target.value
    }
    this.props.updateItem(key, updatedItem);
    
  }

  renderInventory(key) {
    const item = this.props.items[key];
    return (
      <div className="item-edit" key={key}>
        <input type="text" name="name" value={item.name} placeholder="Item Name" onChange={(e) => this.handleChange(e, key)} />
        <input type="text" name="price" value={item.price} placeholder="Item Price"  onChange={(e) => this.handleChange(e, key)}/>
        <textarea type="text" name="desc" value={item.desc} placeholder="Item Desc" onChange={(e) => this.handleChange(e, key)}></textarea>
        <button onClick={() => this.props.removeItem(key)}>Remove Item</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.items).map(this.renderInventory)}
        <AddItemForm addItem={this.props.addItem}/>
        <button onClick={this.props.loadSamples}>Load Sample Items</button>
      </div>
    )
  }
}
