import styled from "styled-components";
import colors from "../../theme/foundations/colors";

const Title = styled.h5`
  line-height: 26px;
  letter-spacing: 0.25px;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  color: ${colors.gray};
  margin: 0;
`;

const ProductTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default ProductTitle;
