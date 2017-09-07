import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Paragraph = styled.pre`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 1rem 0;
  padding: 0.5rem;
  border: dotted 1px;
  white-space: pre-line;
`

Paragraph.propTypes = {
  reverse: PropTypes.bool,
}

export default Paragraph
