import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { clearToken } from '../utils/tokens'
import { logout } from '../actions/auth'

class LogoutButton extends React.Component {
  logout = () => {
    clearToken()
    this.props.logout()
  }

  render () {
    return (
      <Menu.Item>
        <Button onClick={this.logout}>Logout</Button>
      </Menu.Item>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(LogoutButton)
