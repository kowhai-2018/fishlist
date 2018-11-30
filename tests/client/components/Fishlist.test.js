import { orderHighThreat, orderLowThreat, orderMethod, orderAZ} from '../../../client/actions/fish'
import { sortingAZ } from '../../../client/components/FishList'

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

test('orderMethod returns an action with a type', () => {
  const expected = 'SORT_METHOD'
  const actual = orderMethod('METHOD').type
  expect(actual).toBe(expected)
})

test('check if the orderAZ function actually sorts alphabetically', () => {
  const expected = [{name:'A'},{name:'B'},{name:'C'},{name:'D'},{name:'E'}]
  const testarray = [{name:'B'},{name:'E'},{name:'C'},{name:'A'},{name:'D'}]
  const actual = sortingAZ(testarray)
  expect(actual).toBe(expected)
})

test('scores perfect game', function () {
  const testarray = [{name:'B'},{name:'E'},{name:'C'},{name:'A'},{name:'D'}]
  const expected = [{name:'A'},{name:'B'},{name:'C'},{name:'D'},{name:'E'}]
  const actual = sortingAZ(testarray)
  expect(actual).toBe(expected)
})

