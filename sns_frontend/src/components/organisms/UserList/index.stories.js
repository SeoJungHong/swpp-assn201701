import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserList } from 'components'

const list = [
  { id: 0, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 1, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 2, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 3, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
]

storiesOf('UserList', module)
  .add('default', () => (
    <UserList list={list} />
  ))
  .add('loading', () => (
    <UserList list={[]} loading />
  ))
