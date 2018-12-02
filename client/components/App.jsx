import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {Container} from 'semantic-ui-react'

import AddNew from './AddNew'
import FishDetails from './FishDetails'
import FishList from './FishList'
import Register from './RegisterForm'
import TopMenu from './TopMenu'

class App extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <Route path='/' component={TopMenu} />
          <Container style={{marginTop: 75}}>
            <Switch>
              <Route exact path='/' component={FishList} />
              <Route path='/new' component={AddNew} />
              <Route path='/fish/:id' component={FishDetails} />
              <Route path='/register' component={Register} />
            </Switch>
          </Container>
        </React.Fragment>
      </Router>
    )
  }
}

export default App
