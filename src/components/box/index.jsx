import styled from "styled-components"
import colors from '../../theme/foundations/colors'

const Section = styled.section`
  margin-top: 12px;
  margin-bottom: 24px;
  height: auto;
  padding: 24px;
  background-color: ${colors.white2};
  border-radius: 2px;
`;

const Box = ({ children }) => {
  return <Section>{children}</Section>
}

export default Box