import React from 'react'
import {Link} from 'react-router-dom'
import {Popup} from 'semantic-ui-react'
import { connect } from 'react-redux'

export class Fish extends React.Component {
  state = {
    onhover : ''
  }

  componentDidMount () {
    
  }
  
  onHoverHandler() => {

  }

  render() {
    return (
      <li>
        <Popup key={this.state.fishData} header={this.state.fishData.image} content={}/><Link to={`/fish/${props.fishData.id}`}>{props.fishData.name}</Link>
      </li>
    )
  }
}

export default Fish
