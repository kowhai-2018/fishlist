import React from 'react'
import { connect } from 'react-redux'

import { getFish } from '../actions'
import Fish from './Fish'

class FishList extends React.Component {
  state = {
    ...this.state,
    sorting: ""
  }

  change() {
    this.setState({
      ...this.state,
      sorting: event.target.value
    })
  }

  componentDidMount () {
    this.props.getFish()
  }

  test() {
    console.log("value has been selected")
  }

  sortingBy(sortValue, items) {
    switch (sortValue) {
      case "A>Z":
        items.sort((a,b) => {
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
      default: 
      return items
    }

  }

  render () {
    if (this.props.info.pending) {
      return <div>LOADING...</div>
    }

    return (
      <React.Fragment>
        <div>
        <select onChange={() => this.change()} value={this.state.sorting}>
          <option value="A>Z">A-Z</option>
          <option value="Z>A">Z-A</option>
          <option value="Best>Worst">Best > Worst</option>
          <option value="Worst>Best">Worst > Best</option>
        </select>
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
