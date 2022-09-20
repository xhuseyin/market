import styled from "styled-components"
import LogoSvg from "../../assets/icons/logo.svg"

const LogoContainer = styled.div`
height: 40px;
width: 141px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <img src={LogoSvg} alt="market" />
    </LogoContainer>
  );
}

export default Logo
