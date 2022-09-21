import styled from "styled-components";
import colors from "../../theme/foundations/colors";

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
  width: 800px;

  @media screen and (min-width: 960px) {
    width: 800px;
  }

  @media screen and (min-width: 1200px) {
    width: 1232px;
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
