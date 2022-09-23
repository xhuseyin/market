import styled from "styled-components";
import colors from "../../theme/foundations/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleSpinner = styled.div`
  border: solid 16px ${colors.blueLight};
  border-top: solid 16px ${colors.blue};
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <Wrapper>
      <CircleSpinner />
    </Wrapper>
  );
};

export default Spinner;
