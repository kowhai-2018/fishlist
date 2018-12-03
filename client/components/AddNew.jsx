import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { addNewFish } from '../actions/fish'

const threatOptions = [
  {key: 1, text: 'Great', value: '1'},
  {key: 2, text: 'Good', value: '2'},
  {key: 3, text: 'OK', value: '3'},
  {key: 4, text: 'Eat less', value: '4'},
  {key: 5, text: 'Don\'t eat', value: '5'}
]

const methodOptions = [
  {key: 1, text: 'Farmed', value: '1'},
  {key: 2, text: 'Jig', value: '2'},
  {key: 3, text: 'Troll', value: '3'},
  {key: 4, text: 'Long line', value: '4'},
  {key: 5, text: 'Net', value: '5'},
  {key: 6, text: 'Diving', value: '6'},
  {key: 7, text: 'Baited pots', value: '7'},
  {key: 8, text: 'Mid-water trawl', value: '8'},
  {key: 9, text: 'Bottom trawl', value: '9'},
  {key: 10, text: 'Dredge', value: '10'},
  {key: 11, text: 'Trawl', value: '11'},
]


  export default class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      threat: '',
      method: '',
      description: ''
    };
  }
  
  handleChange = (_, { name, value }) => this.setState({ [ name ]: value })

  handleSubmit = e => {
    // alert('A name was submited: ' + this.state);
    e.preventDefault()
    this.props.dispatch(addNewFish(this.state))
    this.setState ({
      name: '',
      threat: '',
      method: '',
      description: ''    
    })
  }
  
  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input label='Name' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
          <Form.Select label='Threat' name='threat' placeholder='Threat' 
            options={threatOptions}  onChange={this.handleChange} value={this.state.threat} />
          <Form.Select label='Method' name='method' placeholder='Method' 
           options={methodOptions} onChange={this.handleChange} value={this.state.method}/>
        </Form.Group>
        <Form.TextArea label='Description' name='description' placeholder='Description' value={this.state.description} onChange={this.handleChange} />
        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
    )
  }
}