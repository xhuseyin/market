import styled from "styled-components";
import logoSvg from "../../assets/icons/logo.svg";

const LogoContainer = styled.div`
  height: 40px;
  width: 141px;
`;

const LogoSvg = styled.div`
  height: 41px;
  width: 142px;
  background-image: url(${logoSvg});
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoSvg />
    </LogoContainer>
  );
};

export default Logo;
