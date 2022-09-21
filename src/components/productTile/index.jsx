import styled from "styled-components";
import colors from "../../theme/foundations/colors";

const Tile = styled.div`
  width: 124px;
  height: 225px;
  margin: 12px;
  position: relative;
`;

const TileImageBox = styled.div`
  width: 124px;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.white5};
  border-radius: 12px;
`;

const TileImage = styled.div`
  width: 92px;
  height: 92px;
  background-color: ${colors.white5};
`;

const TilePrice = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 23px;
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: ${colors.blue};
  text-align: left;

  & > span {
    font-weight: 400;
  }
`;

const TileLabel = styled.div`
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

const TileButton = styled.button`
  position: absolute;
  width: 100%;
  height: 22px;
  bottom: 0;
  background-color: ${colors.blue};
  color: ${colors.white};
  font-style: normal;
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.blueLight};
  }
`;

const ProductTile = ({ label, price, onClick }) => {
  return (
    <Tile>
      <TileImageBox>
        <TileImage />
      </TileImageBox>
      <TilePrice>
        <span>₺</span> {price}
      </TilePrice>
      <TileLabel>{label}</TileLabel>
      <TileButton onClick={() => onClick()}>Add</TileButton>
    </Tile>
  );
};

export default ProductTile;
