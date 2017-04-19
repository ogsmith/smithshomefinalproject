import React, { Component } from 'react';

export default class Item extends Component {
  createItem(event) {
    event.preventDefault();
    console.log('GOnna make some menu items!');
    const item = {
      name: this.name.value,
      price: this.price.value,
      desc: this.desc.value,
    }
    this.props.addItem(item);
    this.itemForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.itemForm = input} className="item-edit" onSubmit={(e) => this.createItem(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="item Name" />
        <input ref={(input) => this.price = input} type="text" placeholder="item Price" />
        <textarea ref={(input) => this.desc = input} placeholder="Item Desc" ></textarea>
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}
