import React from 'react'
import {Link} from 'react-router-dom'
import {Header, List, Label} from 'semantic-ui-react'

export default function Fish (props) {
  return (
    <List.Item size='large'>
      <Header>
        <Link to={`/fish/${props.fishData.id}`}>{props.fishData.name}</Link>
        <Label as='a' color={props.fishData.color} size='medium' horizontal>
          {props.fishData.level}
        </Label>
      </Header>
    </List.Item>

  )
}
