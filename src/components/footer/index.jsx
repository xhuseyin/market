import styled from "styled-components";
import colors from "../../theme/foundations/colors";

const FooterContainer = styled.footer`
display: flex;
justify-content: center;
background-color: ${colors.white6};
width: auto;
height: 63px;
`;

const Footer = ({ children }) => {
  return <FooterContainer>{children}</FooterContainer>;
};

export default Footer;
