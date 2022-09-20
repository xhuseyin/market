import styled from "styled-components"

const MainContainer = styled.main`
  padding: 0 16px;
  height: 100%;
  width: 100%;
`;

const Main = ({children}) => {
  return <MainContainer>{children}</MainContainer>
}

export default Main
