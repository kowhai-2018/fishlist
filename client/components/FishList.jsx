import React from 'react'
import {connect} from 'react-redux'

import {getFish, orderAZ} from '../actions'
import Fish from './Fish'

class FishList extends React.Component {
  componentDidMount () {
    this.props.getFish()
  }

  render () {
    if (this.props.info.pending) {
      return <div>LOADING...</div>
    }

    return (
      <React.Fragment>
        <div>
          <button onClick={() => this.props.orderAZ('AZ')}>A-Z</button>
        </div>
        {this.props.info.error && <div>{this.props.info.error}</div>}
        <ul>
          {this.props.fish.map(fish =>
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

const mapStateToProps = state => {
  if (state.sort.sortOrder == 'AZ') {
    sortingAZ(state.fish)
    return {
      fish: state.fish,
      info: state.info,
      sortOrder: state.sort.sortOrder
    }
  } else {
    return {
      fish: state.fish,
      info: state.info
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFish: () => dispatch(getFish()),
    orderAZ: (x) => dispatch(orderAZ(x))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FishList)
