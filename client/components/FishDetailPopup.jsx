import React from 'react'
import Popup from 'semantic-ui-react'
import Fish from './Fish'

export class FishDetailPopup extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div>
        {this.props.fishData.map(fish => (
          <Popup
            key={fish.name}
            trigger={<Fish key={fish.id} fishData={fish} />}
            header={fish.name}
            content={fish.description}
          />
        ))}
      </div>
    )
  }
}
