import React from 'react'
import {Input} from 'semantic-ui-react'
import {connect} from 'react-redux'

import {searchFish} from '../actions/fish'

export class Search extends React.Component {
  render () {
    return (
      <div>
        <Input icon='search' placeholder='Start typing to filter...' onKeyUp={this.props.searchFish} />
      </div>
    )
  }
}

const matchDispatchToProps = (dispatch) => ({
  searchFish: (e) => dispatch(searchFish(e.currentTarget.value))
})

export default connect(null, matchDispatchToProps)(Search)
