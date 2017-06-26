// Code The Spaceship Component Here

import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <ul>
          <li>Speed: {this.props.speed}</li>
          <li>Has Rockets: {this.props.hasRockets}</li>
          <li>Colors: {this.props.colors}</li>
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}
