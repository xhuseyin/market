import styled from "styled-components";

const MainContainer = styled.main`
  padding: 0 1rem;
`;

const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
