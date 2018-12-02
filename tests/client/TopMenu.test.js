import React from 'react'
import {shallow} from 'enzyme'

import TopMenu from '../../client/components/TopMenu'

describe('TopMenu', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TopMenu debug />)

    expect(component).toMatchSnapshot()
  })
})

it('should render correctly with no props', () => {
  const component = shallow(<TopMenu />)

  expect(component).toMatchSnapshot()
})
