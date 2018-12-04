import React from 'react'
import {shallow} from 'enzyme'
import {Header} from 'semantic-ui-react'
import {FishDetails} from '../../client/components/FishDetails'

test('FishDetails page (header) should show fish name', () => {
  const expected = 'kahawai'
  const props = {
    fishDetails: {name: 'kahawai'},
    info: {pending: false},
    match: {params: {id: ''}},
    getFishDetail: jest.fn()
  }
  const wrapper = shallow(<FishDetails {...props}/>)
  const header = wrapper.find(Header)
  expect(header.html()).toContain(expected)
})

test('FishDetails page should have description in <p>', () => {
  const props = {
    fishDetails: {description: 'fish description'},
    info: {pending: false},
    match: {params: {id: ''}},
    getFishDetail: jest.fn()
  }
  const wrapper = shallow(<FishDetails {...props}/>)
  const description = wrapper.find('p')
  expect(description.text()).toBe('fish description')
})

test('FishDetails page (header) should show method of catch', () => {
  const expected = 'trawl'
  const props = {
    fishDetails: {method: 'trawl'},
    info: {pending: false},
    match: {params: {id: ''}},
    getFishDetail: jest.fn()
  }
  const wrapper = shallow(<FishDetails {...props}/>)
  const header = wrapper.find(Header)
  expect(header.html()).toContain(expected)
})
