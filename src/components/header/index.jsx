import styled from "styled-components";
import colors from "../../theme/foundations/colors";

const Container = styled.header`
display: flex;
justify-content: center;
position: fixed;
top: 0;
z-index: 1;
width: 100%;
height: 76px;
background-color: ${colors.blue};
`;

const Row = styled.div`
  height: 76px;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 960px) {
    width: 800px;
  }

  @media screen and (min-width: 1200px) {
    width: 1232px;
  }
`;

const Column = styled.div`
  min-width: 123px;
`;



const Header = ({ left, right, center }) => {
  return (
    <Container>
      <Row>
        <Column>{left}</Column>
        <Column>{center}</Column>
        <Column>{right}</Column>
      </Row>
    </Container>
  );
};

export default Header;
