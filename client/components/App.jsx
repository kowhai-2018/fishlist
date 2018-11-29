import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import AddNew from './AddNew'
import FishList from './FishList'
import TopMenu from './TopMenu'

class App extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <Route path='/' component={TopMenu} />
          <Container style={{ marginTop: 75 }}>
            <Switch>
              <Route exact path='/' component={FishList} />
              <Route path='/new' component={AddNew} />
            </Switch>
          </Container>
        </React.Fragment>
      </Router>
    )
  }
}

export default App

