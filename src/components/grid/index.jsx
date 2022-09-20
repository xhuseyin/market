import styled from "styled-components";
import colors from "../../theme/foundations/colors";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 8px;
  background-color: ${colors.white2};
  border-radius: 2px;
`;

const Grid = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Grid;
