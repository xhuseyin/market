import styled from "styled-components";
import colors from "../../theme/foundations/colors";

const EmptyResultContainer = styled.div`
  height: 50px;
  width: 100%;
  color: ${colors.blue};
  border: 2px solid ${colors.blue};
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;

const EmptyResult = ({ label }) => {
  return <EmptyResultContainer>{label}</EmptyResultContainer>;
};

export default EmptyResult;
