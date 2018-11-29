import React from 'react'
import {connect} from 'react-redux'
import {Input} from 'semantic-ui-react'

import {getFish} from '../actions'
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
        {this.props.info.error && <div>{this.props.info.error}</div>}
        <Input icon='search' placeholder='Start typing to filter...' />
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
    info: state.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFish: () => dispatch(getFish())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FishList)
