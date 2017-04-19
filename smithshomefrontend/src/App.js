import React, { Component } from 'react';
import './styles/App.css';
import Inventory from './components/Inventory';
import Item from './components/Items';
import sampleItems from './sample-items';
import $ from 'jquery';


export default class App extends Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
  }

  state = {
    items: {}
  };


  addItem(item) {
    const items = {...this.state.items};
    const timestamp = Date.now();
    items[`item-${timestamp}`] = item;
    this.setState({ items });
    $.ajax({
        type: "POST",
        url: "/../add_item.py",
        data: { param: item }
    }).done(function() {
      console.log("items have been updated");
  });
  }

  updateItem = (key, updatedItem) => {
    const items = {...this.state.items};
    items[key] = updatedItem;
    this.setState({ items });
    $.ajax({
        type: "POST",
        url: "/../update_item.py",
        data: { param: updatedItem }
    }).done(function() {
      console.log("items have been updated");
  });
}


  removeItem(key) {
    const items = {...this.state.items};

      $.ajax({
          type: "POST",
          url: "/../backendcode.py",
          data: { param: items[key] }
      }).done(function() {
        this.setState({ items });
        console.log("items have been removed");
      })
    }

  loadSamples = () => {
    this.setState({
      items: sampleItems
    });
  };

  render() {
    return (
      <div className="App-header">
        <div className="menu">
          <ul className="list-of-items">
            {
              Object
                .keys(this.state.items)
                .map(key => <Item key={key} index={key} details={this.state.items[key]}/>)
            }
          </ul>
        </div>
        <Inventory
          addItem={this.addItem}
          removeItem={this.removeItem}
          loadSamples={this.loadSamples}
          items={this.state.items}
          updateItem={this.updateItem}
        />
      </div>
    )
  }
}
