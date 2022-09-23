import styled from "styled-components";
import colors from "../../theme/foundations/colors";
import device from "../../theme/foundations/devices";

const Title = styled.h5`
  line-height: 18px;
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  color: ${colors.gray};
  margin: 0;

  @media ${device.large} {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const BoxTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default BoxTitle;
