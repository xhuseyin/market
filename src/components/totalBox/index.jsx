import { useSelector } from "react-redux";
import styled from "styled-components";
import colors from "../../theme/foundations/colors";
import bagIcon from "../../assets/icons/basket.svg";

const Container = styled.div`
  height: 76px;
  width: 123px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blueDark};
`;

const Text = styled.div`
  height: 24px;
  width: auto;
  line-height: 24px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: ${colors.white};
  margin-left: 8px;
`;

const BagIcon = styled.div`
  height: 24px;
  width: 24px;
  display: inline-block;
  background-image: url(${bagIcon});
  background-size: cover;
  margin-right: 8px;
`;

const TotalBox = () => {
  const { basket } = useSelector((state) => state);
  return (
    <Container>
      <BagIcon />
      <Text>₺ {basket.total > 0 ? basket.total.toFixed(2) : 0}</Text>
    </Container>
  );
};

export default TotalBox;
