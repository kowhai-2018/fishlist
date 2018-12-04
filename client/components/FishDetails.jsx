import React from 'react'
import {Container, Grid, Icon, Image, Header, Divider, Button, Placeholder} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getFishDetail} from '../actions/fish'

// import {Link} from 'react-router-dom'

export class FishDetails extends React.Component {
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
              <Header size='huge' textAlign='center'>{this.props.fishDetails.name} <em>{this.props.fishDetails.method}</em>
                <h3>{this.props.fishDetails.level}</h3></Header>
            </Grid.Column>
            <Grid.Column>
              <Image circular align='right' size='small' src={this.props.fishDetails.image}></Image>
            </Grid.Column>
          </Grid>
        </Container>
        <Divider hidden />
        <Container>
          <p>{this.props.fishDetails.description}</p>
          <a href={this.props.fishDetails.link}><Button basic color='blue' content='More info' icon='info circle' labelPosition='left'/></a>
        </Container>
        <Divider />
        <Container>
          <Grid columns={2} doubling stackable>
            <Grid.Column align='center'>
              <Placeholder style={{width: 1200}}>
                <Image src={this.props.fishDetails.image}/>
              </Placeholder>
            </Grid.Column>
            <Grid.Column align='center'>
              <a href={this.props.fishDetails.video}><Button basic color='blue' content='Watch video' icon='video play' labelPosition='left'/></a>
            </Grid.Column>
            <Grid.Row>
              <Grid.Column align='center'>
                <a href="/api/v1/fish/delete/"{this.params.id}><Button basic color='red' content='Delete' icon='trash alternate' labelPosition='left'/></a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fish: state.fish,
    fishDetails: state.fishDetails,
    info: state.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFishDetail: (fishId) => dispatch(getFishDetail(fishId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FishDetails)
