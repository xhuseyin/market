import styled from "styled-components";
import colors from "../../theme/foundations/colors";

const Title = styled.h5`
  line-height: 18px;
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  color: ${colors.gray};
`;

const BoxTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default BoxTitle;
