import styled from "styled-components";

const Content = styled.aside`
  height: 100%;
  min-width: 296px;
`;

const Aside = ({ children }) => {
  return <Content>{children}</Content>;
};

export default Aside;
