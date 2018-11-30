import React from 'react'
import { shallow } from 'enzyme'
import { Button, Message } from 'semantic-ui-react'

import { RegisterForm } from '../../client/components/RegisterForm'

test('RegisterForm should show a message if username is not provided', () => {
  const props = {
    auth: { error: 'Must provide username.' }
  }
  const wrapper = shallow(<RegisterForm { ...props } />)
  expect(wrapper.find(Message).length).toBe(1)
})
