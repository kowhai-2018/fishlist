import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


  export default class AddNew extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: '',
    threat: '',
    method: '',
    description: ''
  };

  this.handleChange = this.handleChange.bind(this);
}

  handleChange = e => this.setState
  ({ [ e.target.name ]: e.target.value })

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input label='Name' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
          <Form.Input label='Threat' name='threat' placeholder='Threat' value={this.state.threat} onChange={this.handleChange} />
          <Form.Input label='Method' name='method' placeholder='Method' value={this.state.method} onChange={this.handleChange} />
        </Form.Group>
        <Form.TextArea label='Description' name='description' placeholder='Description' value={this.state.description} onChange={this.handleChange} />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}