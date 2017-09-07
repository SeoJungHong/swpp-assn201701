import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledTable = styled.table`
  font-family: ${font('primary')};
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${palette('grayscale', 1, true)};
  color: ${palette('grayscale', 0)};
`

const Table = ({ caption, children, ...props }) => {
  return (
    <StyledTable {...props}>
      <tbody>{children}</tbody>
    </StyledTable>
  )
}

Table.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.any,
  reverse: PropTypes.bool,
}

export default Table
