import React from 'react'
import {connect} from 'react-redux'
import {Dropdown, Menu} from 'semantic-ui-react'
import {getFish, orderAZ, orderZA, orderHighThreat, orderLowThreat, orderMethod} from '../actions/fish'
import Fish from './Fish'
import Search from './Search'

class FishList extends React.Component {
  componentDidMount () {
    this.props.getFish()
  }

  render () {
    if (this.props.info.pending) {
      return <div>LOADING...</div>
    }
    const fishes = this.props.fish.filter(fish => fish.name.toLowerCase().includes(this.props.search.toLowerCase()))

    return (
      <React.Fragment>
        <div>
          <Menu vertical>
            <Dropdown item text='Sort By'>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => this.props.orderAZ('AZ')}>A-Z</Dropdown.Item>
                <Dropdown.Item onClick={() => this.props.orderZA('ZA')}>Z-A</Dropdown.Item>
                <Dropdown.Item onClick={() => this.props.orderLowThreat('LOWTHREAT')}>Threat Level (Low-High)</Dropdown.Item>
                <Dropdown.Item onClick={() => this.props.orderHighThreat('HIGHTHREAT')}>Threat Level (High-Low)</Dropdown.Item>
                <Dropdown.Item onClick={() => this.props.orderMethod('METHOD')}>Method</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </div>
        {this.props.info.error && <div>{this.props.info.error}</div>}
        <Search />
        <ul>
          {this.props.fish && fishes.map(fish =>
            <Fish key={fish.id} fishData={fish} />)}
        </ul>
      </React.Fragment>
    )
  }
}

export function sortingAZ (items) {
  return items.sort((a, b) => {
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
}

export function sortingZA (items) {
  return items.sort((a, b) => {
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()
    if (nameA > nameB) {
      return -1
    }
    if (nameA < nameB) {
      return 1
    }
    return 0
  })
}

export function sortingHighThreat (items) {
  return items.sort((a, b) => {
    let levelA = Number(a.level_id)
    let levelB = Number(b.level_id)
    return levelB - levelA
  })
}

export function sortingLowThreat (items) {
  return items.sort((a, b) => {
    let levelA = Number(a.level_id)
    let levelB = Number(b.level_id)
    return levelA - levelB
  })
}

export function sortingMethod (items) {
  return items.sort((a, b) => {
    let methodA = Number(a.method_id)
    let methodB = Number(b.method_id)
    return methodB - methodA
  })
}

const mapStateToProps = state => {
  const sortedFish = [...state.fish]
  if (state.sort.sortOrder == 'AZ') {
    sortingAZ(sortedFish)
  } else if (state.sort.sortOrder == 'ZA') {
    sortingZA(sortedFish)
  } else if (state.sort.sortOrder == 'HIGHTHREAT') {
    sortingHighThreat(sortedFish)
  } else if (state.sort.sortOrder == 'LOWTHREAT') {
    sortingLowThreat(sortedFish)
  } else if (state.sort.sortOrder == 'METHOD') {
    sortingMethod(sortedFish)
  }
  return {
    fish: sortedFish,
    search: state.search,
    info: state.info,
    sortOrder: state.sort.sortOrder
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFish: () => dispatch(getFish()),
    orderAZ: (x) => dispatch(orderAZ(x)),
    orderZA: (x) => dispatch(orderZA(x)),
    orderHighThreat: (x) => dispatch(orderHighThreat(x)),
    orderLowThreat: (x) => dispatch(orderLowThreat(x)),
    orderMethod: (x) => dispatch(orderMethod(x))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FishList)
