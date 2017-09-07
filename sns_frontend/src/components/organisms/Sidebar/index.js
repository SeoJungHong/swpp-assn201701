import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, Block } from 'components'

const Wrapper = styled(Block)`
  justify-content: center;
  padding: 1rem;
  text-align: center;
  height: 100%;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const Sidebar = ({ user, enterWall, updateUser }) => {
  return (
    <Wrapper opaque reverse>
      <p><Link to="/" onClick={() => enterWall(null)}>Timelines</Link></p>
      {user && <p><Link to="/" onClick={() => updateUser(user)}>My Wall</Link></p>}
      {user && <p><Link to="/post/">Post</Link></p>}
      {user && <p><Link to="/category/">Category</Link></p>}
	  {user && <p><Link to="/ranking/">Ranking</Link></p>}
    </Wrapper>
  )
}

Sidebar.propTypes = {
  user: PropTypes.object,
  updateUser: PropTypes.func.isRequired,
  enterWall: PropTypes.func.isRequired,
}

export default Sidebar
