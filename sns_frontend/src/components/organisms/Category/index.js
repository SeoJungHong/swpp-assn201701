import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link, Table } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`
const TdStyled = styled.td`
  text-align: center;
  border: 15px solid white;
  background-color: #ddc5ec;
  padding: 4rem;
`
const Category = ({ viewCategory }) => {
  return (
    <Wrapper>
      <Table>
        <tr>
          <TdStyled style={{ backgroundColor:'#ffe9c4' }}> 
            <Link to="/" style={{ fontSize:'35px' }} palette="black" onClick={() => viewCategory('Food')}>Food</Link>
          </TdStyled>
          <TdStyled style={{ backgroundColor:'#ecc5dc' }}>
            <Link to="/" style={{ fontSize:'35px' }} palette="black" onClick={() => viewCategory('Activity')}>Activity</Link>
          </TdStyled>
        </tr>
        <tr>
          <TdStyled>
            <Link to="/" style={{ fontSize:'35px' }} palette="black" onClick={() => viewCategory('Leisure')}>Leisure</Link>
          </TdStyled>
          <TdStyled style={{ backgroundColor:'#dcecc5' }}>
            <Link to="/" style={{ fontSize:'35px' }} palette="black" onClick={() => viewCategory('Beauty')}>Beauty</Link>
          </TdStyled>
        </tr>
      </Table>
    </Wrapper>
  )
}

Category.propTypes = {
  viewCatogory: PropTypes.func,
}
export default Category
