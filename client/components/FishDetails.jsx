import React from 'react'
import {Container, Grid, Icon, Image, Header, Divider, Button, Placeholder} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getFishDetail} from '../actions'

// import {Link} from 'react-router-dom'

class FishDetails extends React.Component {
  componentDidMount () {
    this.props.getFishDetail(this.props.match.params.id)
  }

  render () {
    if (this.props.info.pending) {
      return <div>LOADING...</div>
    }

    return (
      <div>
        <Container>
          <Grid columns={3} doubling stackable>
            <Grid.Column>
              <Icon onClick={() => history.back()} color='green' name='arrow circle left' size='huge' />
            </Grid.Column>
            <Grid.Column>
              <Header size='huge' textAlign='center'>Lorem</Header> {/* This is where the props for the fish name will go */}
            </Grid.Column>
            <Grid.Column>
              <Image circular align='right' size='tiny' src='https://placekitten.com/200/200'></Image> {/* This is where the props for the image will go */}
            </Grid.Column>
          </Grid>
        </Container>
        <Divider hidden />
        <Container>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quaerat autem porro, iusto dolorem perferendis laudantium assumenda, necessitatibus recusandae quis in ipsam fugit aspernatur delectus ducimus. Fugiat voluptatem corrupti est?</p> {/* This is where the props for the description will go */}
          <a href='https://en.wikipedia.org/wiki/P%C4%81ua'><Button basic color='blue' content='More info' icon='info circle' labelPosition='left'/></a> {/* This is where the props for the 'more info' link will go */}
        </Container>
        <Divider />
        <Container>
          <Grid columns={2} doubling stackable>
            <Grid.Column align='left'>
              <Placeholder style={{height: 300, width: 480}}>
                <Placeholder.Image /> {/* This is where the props for the video will go */}
              </Placeholder>
            </Grid.Column>
            <Grid.Column align='right'>
              <Placeholder style={{height: 300, width: 480}} >
                <Placeholder.Image /> {/* This is where the props for the image will go */}
              </Placeholder>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fish: state.fish,
    info: state.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFishDetail: (fishId) => dispatch(getFishDetail(fishId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FishDetails)
