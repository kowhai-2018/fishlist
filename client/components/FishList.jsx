import React from 'react'
import {connect} from 'react-redux'
import {Dropdown, Menu} from 'semantic-ui-react'

import {getFish, orderAZ, orderZA} from '../actions/fish'
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
                <Dropdown.Item>Threat Level</Dropdown.Item>
                <Dropdown.Item>Method</Dropdown.Item>
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

function sortingAZ (items) {
  items.sort((a, b) => {
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

function sortingZA (items) {
  items.sort((a, b) => {
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

const mapStateToProps = state => {
  if (state.sort.sortOrder == 'AZ') {
    sortingAZ(state.fish)
  } else if (state.sort.sortOrder == 'ZA') {
    sortingZA(state.fish)
  }
  return {
    fish: state.fish,
    search: state.search,
    info: state.info,
    sortOrder: state.sort.sortOrder
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFish: () => dispatch(getFish()),
    orderAZ: (x) => dispatch(orderAZ(x)),
    orderZA: (x) => dispatch(orderZA(x))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FishList)
