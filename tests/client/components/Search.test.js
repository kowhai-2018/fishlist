import React from 'react'
import { mount, shallow } from 'enzyme'
import { Input } from 'semantic-ui-react'
import { searchFish } from '../../../client/actions/fish'
import { Search } from '../../../client/components/Search'


test('Initial test', () => {
  expect(1).toBe(1)
})

test('<Input /> in Search', () => {
  const expected = ''
  const wrapper = mount(<Input />)
  expect(wrapper.text()).toMatch(expected)
})


test('Search should return fish', () => {
  const expected = {"searchedFish": "smelly fish", "type": "SEARCH_FISH"}
  const actual = searchFish("smelly fish")
  expect(actual).toEqual(expected)
})

describe('Search', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Search debug />)

    expect(component).toMatchSnapshot()
  })
})

test('Search should render correctly with no props', () => {
  const component = shallow(<Search />)

  expect(component).toMatchSnapshot()
})