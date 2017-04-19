import React, { Component } from 'react';
import './styles/App.css';
import Inventory from './components/Inventory';
import Item from './components/Items';
import sampleItems from './sample-items';


export default class App extends Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
  }

  state = {
    items: {}
  };


  addItem(item) {
    const items = {...this.state.items};
    const timestamp = Date.now();
    items[`item-${timestamp}`] = item;
    this.setState({ items });
  }

  updateItem = (key, updatedItem) => {
    const items = {...this.state.items};
    items[key] = updatedItem;
    this.setState({ items });
  };


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
                .map(key => <Item key={key} index={key} details={this.state.items[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Inventory
          addItem={this.addItem}
          loadSamples={this.loadSamples}
          items={this.state.items}
          updateItem={this.updateItem}
        />
      </div>
    )
  }
}
