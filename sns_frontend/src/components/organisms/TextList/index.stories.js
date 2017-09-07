import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TextList } from 'components'

const list = [
  { id: 0, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 1, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 2, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 3, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
]

storiesOf('TextList', module)
  .add('default', () => (
    <TextList list={list} />
  ))
  .add('loading', () => (
    <TextList list={[]} loading />
  ))
