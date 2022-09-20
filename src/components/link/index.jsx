import styled from "styled-components"
import colors from '../../theme/foundations/colors'

const LinkContainer = styled.div`
  font-weight: 400;
  text-align: center;
  padding: 0 15px;
  color: var(${colors.blue});
  position: relative;
  width: auto;
  height: 30px;
  line-height: 30px;
  font-size: 13px;

  &:after {
    content: ".";
    font-size: 30px;
    font-family: marketFont400;
    position: absolute;
    top: -10px;
    width: 30px;
    height: 30px;
  }

  &:last-child:after {
    content: "";
  }
`;

const Link = ({ label }) => {
  return <LinkContainer>{label}</LinkContainer>
}

export default Link
