import React from 'react'
import {shallow} from 'enzyme'
import Fish from '../../../client/components/Fish'
import {Link} from 'react-router-dom'
import {Header, Label} from 'semantic-ui-react'

test('Fish function should contain fishID and name', () => {
  const expected =
  <Link to='/fish/4'>
    <Header>
      <Label as='a' color='green' size='medium' horizontal>
        good
      </Label>
      fish
    </Header>
  </Link>

  const props = {
    fishData: {
      id: 4,
      name: 'fish',
      color: 'green',
      level: 'good'
    }
  }
  const wrapper = shallow(<Fish {...props}/>)
  expect(wrapper.containsMatchingElement(expected))
    .toBeTruthy()
})
