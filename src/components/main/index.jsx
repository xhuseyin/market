import styled from "styled-components";

const MainContainer = styled.main`
  height: 100%;
  width: 100%;
  padding: 0 1rem;
`;

const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
