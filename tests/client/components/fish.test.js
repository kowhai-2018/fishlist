import React from 'react'
import {shallow} from 'enzyme'
import Fish from '../../../client/components/Fish'
import {Link} from 'react-router-dom'

test('Fish function should contain fishID and name', () => {
  const expected = <Link to='/fish/4'>fish</Link>
  const props = {
    fishData: {
      id: 4,
      name: 'fish'
    }
  }
  const wrapper = shallow(<Fish {...props}/>)
  expect(wrapper.containsMatchingElement(expected))
    .toBeTruthy()
})
