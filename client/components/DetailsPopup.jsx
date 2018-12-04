import React from 'react'
import { connect } from 'react-redux'
import { Loader, Popup } from 'semantic-ui-react'

import { clearFishDetail, getFishDetail } from '../actions/fish'

export function DetailsPopup (props) {
  const content = <Loader />

  return <Popup
      trigger={props.trigger}
      content={content}
      onOpen={() => props.getFishDetail(props.id)}
      onClose={props.clearFishDetails}
    />
}

const mapStateToProps = ({ fishDetails }) => ({ fishDetails })

const mapDispatchToProps = dispatch => ({
  clearFishDetail: () => dispatch(clearFishDetail()),
  getFishDetail: id => dispatch(getFishDetail(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPopup)
