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
`;

const TotalBox = () => {
  const { basket } = useSelector((state) => state);
  return (
    <Container>
      <img src={bagIcon} alt={'total box icon'}/>
      <Text>₺ {basket.total > 0 ? basket.total.toFixed(2) : 0}</Text>
    </Container>
  );
};

export default TotalBox;
