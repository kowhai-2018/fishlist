import React from 'react'
import {shallow} from 'enzyme'

import AddNew from '../../client/components/AddNew'

describe('AddNew', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<AddNew debug />)

    expect(component).toMatchSnapshot()
  })
})

it('should render correctly with no props', () => {
  const component = shallow(<AddNew />)

  expect(component).toMatchSnapshot()
})
