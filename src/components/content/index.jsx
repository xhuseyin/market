import styled from "styled-components";
import colors from "../../theme/foundations/colors";
import device from "../../theme/foundations/devices";

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 76px;
  height: auto;
  width: 100%;
  background-color: ${colors.white6};


`;

const Section = styled.section`
  display: flex;
  margin-top: 40px;
  width: 1232px;

  @media ${device.large} {
    flex-direction: column;
    width: 100%;
  }


`;

const Content = ({ children }) => {
  return (
    <SectionWrapper>
      <Section>{children}</Section>
    </SectionWrapper>
  );
};

export default Content;
