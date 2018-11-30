import React from 'react'
import { connect } from 'react-redux'
import { Menu, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import LogoutButton from './LogoutButton'
import { login, loginFailure } from '../actions/auth'

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
    this.setState({ username: '', password: '' })
  }

  render () {
    const { error, loggedIn, pending } = this.props.auth
    const usernameError = error && error.includes('username')
    const passwordError = error && error.includes('password')

    if (loggedIn) {
      return <LogoutButton />
    }

    return (
      <React.Fragment>
        <Menu.Item position='right'>
          <Input
            error={usernameError}
            name='username'
            onChange={this.changeHandler}
            placeholder='Username'
            value={this.state.username} />
        </Menu.Item>
        <Menu.Item>
          <Input
            error={passwordError}
            name='password'
            onChange={this.changeHandler}
            placeholder='Password'
            type='password'
            value={this.state.password} />
        </Menu.Item>

        <Menu.Item>
          <Button
            disabled={pending}
            onClick={this.login}>Log in</Button>
        </Menu.Item>
        <Menu.Item as={Link} to='/register'>
          <Button>Register</Button>
        </Menu.Item>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
  loginFailure: error => dispatch(loginFailure(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
