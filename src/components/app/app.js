import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: null
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };



  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <div className="stardb-app">
        <Header/>
        { planet }

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle random planet
        </button>
      </div>
    );
  }
}
