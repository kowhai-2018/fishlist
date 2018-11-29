import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class AddNew extends Component {
  state = {
    username: '',
    threat: ''
  }

  handleChange = e => this.setState
  ({ [ e.target.name ]: e.target.value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Name' placeholder='Name' />
          <Form.Input fluid label='Threat' placeholder='Threat' onChange={this.handleChange} value={this.state.threat} />
          <Form.Input fluid label='Method' placeholder='Method' />
        </Form.Group>
        <Form.TextArea label='Description' placeholder='Description' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}