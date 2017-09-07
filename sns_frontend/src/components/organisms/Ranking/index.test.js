import React from 'react'
import { shallow } from 'enzyme'
import Ranking from '.'

const wrap = (props = {}) => shallow(<Ranking {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
