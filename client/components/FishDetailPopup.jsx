import React from 'react'
import {Popup, Button} from 'semantic-ui-react'
// import Fish from './Fish'

export default class FishDetailPopup extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      // <div>
      //   {this.props.fishData.map(fish => (
      //     <Popup
      //       key={fish.name}
      //       trigger={<Fish key={fish.id} fishData={fish} />}
      //       header={fish.name}
      //       content={fish.description}
      //     />
      //   ))}
      // </div>
      <Popup
        trigger={<Button icon='add' />}
        content="The default theme's basic popup removes the pointing arrow."
        basic
      />
    )
  }
}
