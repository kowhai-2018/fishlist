import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import {configure, mount, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { App } from '../../../client/components/App'
import TopMenu from '../../../client/components/TopMenu'
import FishList from '../../../client/components/FishList'

configure({adapter: new Adapter()})

test('<App />', () => {
  const expected = '<BrowserRouter />'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toMatch(expected)
})

test('<App /> matches the last snapshot', () => {
  const renderer = new ShallowRenderer()
  const actual = renderer.render(<App />)
  expect(actual).toMatchSnapshot()
})

