import React from 'react'
import {Link} from 'react-router-dom'
import {Header, List, Label} from 'semantic-ui-react'
import FishDetailPopup from './FishDetailPopup'

export default class Fish extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showPopup: false
    }
  }
  onHoverHandler = e => this.setState({showPopup:true})

  render () {
    return (
      <List.Item size='large'>
        <Link to={`/fish/${this.props.fishData.id}`}>
          <Header>
            <Label  onMouseOver={this.onHoverHandler} as='a' color={this.props.fishData.color} size='medium' horizontal>
              {this.props.fishData.level}
            </Label>
            {this.props.fishData.name}
          </Header>
          {this.state.showPopup && <FishDetailPopup />}
        </Link>
      </List.Item>
    )
  }
}