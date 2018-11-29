import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class AddNew extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Name' placeholder='Name' />
          <Form.Input fluid label='Threat' placeholder='Threat' />
          <Form.Input fluid label='Method' placeholder='Method' />
        </Form.Group>
        <Form.TextArea label='Description' placeholder='Description' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}