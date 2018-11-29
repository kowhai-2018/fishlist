import React from 'react'
import {Container, Grid, Icon, Image, Header, Divider, Button, Placeholder} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const FishDetails = ({match}) => {

  const name = (match.params.name)

  return (
    <div>
      <Container>
        <Grid columns={3} doubling stackable>
          <Grid.Column>
            <Link to='/'><Icon color='green' name='arrow circle left' size='huge' /></Link>
          </Grid.Column>
          <Grid.Column>
            <Header size='huge' textAlign='center'>{name}</Header> {/* This is where the props for the fish name will go */}
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

export default FishDetails
