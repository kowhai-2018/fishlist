import React from 'react'
import {Link} from 'react-router-dom'
import {Header, List, Label} from 'semantic-ui-react'

export default function Fish (props) {
  return (
    <List.Item size='large'>
      <Link to={`/fish/${props.fishData.id}`}>
        <Header>
          <Label as='a' color={props.fishData.color} size='medium' horizontal>
            {props.fishData.level}
          </Label>
          {props.fishData.name}
        </Header>
      </Link>
    </List.Item>

  )
}

export default Fish
