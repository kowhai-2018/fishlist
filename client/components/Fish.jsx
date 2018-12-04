import React from 'react'
import {Link} from 'react-router-dom'
import {Header, List, Label} from 'semantic-ui-react'

import DetailsPopup from './DetailsPopup'

export default function Fish (props) {
  return (
    <List.Item size='large'>
      <Link to={`/fish/${props.fishData.id}`}>
        <Header>
          <Label as='a' color={props.fishData.color} size='medium' horizontal>
            {props.fishData.level}
          </Label>
          <DetailsPopup fishId={props.fishData.id} trigger={<span>{props.fishData.name}</span>} />
        </Header>
      </Link>
    </List.Item>
  )
}
