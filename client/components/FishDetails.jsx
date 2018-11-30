import React from 'react'
import {Container, Grid, Icon, Image, Header, Divider, Button, Placeholder} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getFishDetail} from '../actions/fish'

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
              <Header size='huge' textAlign='center'>{this.props.fishDetails.name}</Header> {/* This is where the props for the fish name will go */}
            </Grid.Column>
            <Grid.Column>
              <Image circular align='right' size='small' src={this.props.fishDetails.image}></Image> {/* This is where the props for the image will go */}
            </Grid.Column>
          </Grid>
        </Container>
        <Divider hidden />
        <Container>
          <p>{this.props.fishDetails.description}</p> {/* This is where the props for the description will go */}
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
              {/* <Placeholder style={{height: 300, width: 480}} > */}
              {/* <div className="ui video" data-source={this.props.fishDetails[0].video} data-id="i_mKY2CQ9Kk" data-image="/images/cat.jpg"></div> */}
              {/* </Placeholder> */}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
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
