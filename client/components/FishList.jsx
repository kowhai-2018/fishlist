import React from 'react'
import { connect } from 'react-redux'

import { getFish } from '../actions'
import Fish from './Fish'

class FishList extends React.Component {
  componentDidMount () {
    this.props.getFish()
  }

  sortingBy(items) {
    items.sort(function (a,b) {
      let nameA = a.name.toUpperCase()
      let nameB = b.name.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB){
        return 1
      }
      return 0
    })
    return items
  }

  render () {
    if (this.props.info.pending) {
      return <div>LOADING...</div>
    }

    return (
      <React.Fragment>
        {this.props.info.error && <div>{this.props.info.error}</div>}
        <ul>
          {this.sortingBy(this.props.fish).map(fish =>
            <Fish key={fish.id} fishData={fish} />)}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    fish: state.fish,
    info: state.info,
    sortby: state.sort
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFish: () => dispatch(getFish())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FishList)
