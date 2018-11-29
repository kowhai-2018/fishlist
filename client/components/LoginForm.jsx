import React from 'react'
import { connect } from 'react-redux'
import { Menu, Input, Button } from 'semantic-ui-react'

import LogoutButton from './LogoutButton'
import { login } from '../actions/auth'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  changeHandler = e => this.setState({ [ e.target.name ]: e.target.value })

  login = () => {
    const { username, password } = this.state
    const { login, loginFailure } = this.props

    if (!username) {
      return loginFailure('Must provide username.')
    }

    if (!password) {
      return loginFailure('Must provide password.')
    }

    login(username, password)
  }

  render () {
    const { loggedIn, pending } = this.props.auth

    if (loggedIn) {
      return <LogoutButton />
    }

    return (
      <React.Fragment>
        <Menu.Item position='right'>
          <Input
            name='username'
            onChange={this.changeHandler}
            placeholder='Username'
            value={this.state.username} />
        </Menu.Item>
        <Menu.Item>
          <Input
            name='password'
            onChange={this.changeHandler}
            placeholder='Password'
            value={this.state.password} />
        </Menu.Item>

        <Menu.Item>
          <Button
            disabled={pending}
            onClick={this.login}>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Register</Button>
        </Menu.Item>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
