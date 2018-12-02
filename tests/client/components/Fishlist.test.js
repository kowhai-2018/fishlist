import { orderHighThreat, orderLowThreat } from '../../../client/actions/fish'

test('orderHighThreat returns an action with a type', () => {
  const expected = 'SORT_HIGH_THREAT'
  const actual = orderHighThreat('HIGHTHREAT').type
  expect(actual).toBe(expected)
})

test('orderLowThreat returns an action with a type', () => {
  const expected = 'SORT_LOW_THREAT'
  const actual = orderLowThreat('LOWTHREAT').type
  expect(actual).toBe(expected)
})

