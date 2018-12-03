import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../../client/components/App'
import TopMenu from '../../../client/components/TopMenu'
import FishList from '../../../client/components/FishList'

configure({adapter: new Adapter()})

test('<App />', () => {
  const expected = '<BrowserRouter />'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toMatch(expected)
})

test('<App /> renders a <TopMenu /> component', () => {
  const expected = 1
  const wrapper = shallow(<App />)
  const actual = wrapper.find(TopMenu).length

  expect(actual).toBe(expected)
})

test('<App /> renders a <FishList /> component', () => {
  const expected = 1
  const wrapper = shallow(<App />)
  const actual = wrapper.find(FishList).length

  expect(actual).toBe(expected)
})
