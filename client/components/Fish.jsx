import React from 'react'
import {Link} from 'react-router-dom'
import {Header, List, Label, Popup, Image, Grid, Button} from 'semantic-ui-react'
// import styled from 'styled-components'


// const TitleHeader = styled(Button)`
//   &&& {
//     font-size: 1.8rem;
//   }
// `
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
      <Popup
        wide trigger={<List.Item size='large'>
        <Link to={`/fish/${this.props.fishData.id}`}>
          <Header>
            <Label onMouseOver={this.onHoverHandler}  color={this.props.fishData.color} size='medium' horizontal>
              {this.props.fishData.level}
            </Label>
            {this.props.fishData.name}
          </Header>
        </Link>
      </List.Item>}
      >
        <Grid divided columns='equal'>
          <Grid.Column>
            <Popup
              trigger={<Button content={this.props.fishData.description.substring(0,40) + '...'} fluid />}
              position='left'
              size='large'
              inverted
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              trigger={<Image src={this.props.fishData.image} fluid />}
              position='left'
              size='large'
              inverted
            />
          </Grid.Column>
        </Grid>
      </Popup>
    )
  }
}