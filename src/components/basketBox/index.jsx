import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseAmount, decreaseAmount } from "../../store/actions/basket";
import EmptyResult from "../emptyResult";
import styled from "styled-components";
import colors from "../../theme/foundations/colors";
import minusIcon from "../../assets/icons/minus.svg";
import plusIcon from "../../assets/icons/plus.svg";

const Container = styled.div`
  height: auto;
  padding: 8px;
  background-color: ${colors.blue};
  border-radius: 2px;
`;

const Body = styled.div`
  height: auto;
  padding: 16px;
  background-color: ${colors.white2};
  border-radius: 2px;
`;

const BodyItem = styled.div`
  height: 72px;
  position: relative;
  border-bottom: 1.02px solid ${colors.white4};
`;

const BodyItemLabel = styled.div`
  position: absolute;
  top: 16px;
  left: 6px;
  font-size: 14px;
  width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 400;
`;

const BodyItemPrice = styled.div`
  position: absolute;
  left: 6px;
  top: 38px;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.blue};
`;

const BodyItemAmount = styled.div`
  position: absolute;
  right: 32px;
  top: 20px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  background-color: ${colors.blue};
  color: ${colors.white};
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
`;

const BodyTotal = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const BodyTotalBox = styled.div`
  width: 92px;
  height: 48px;
  line-height: 48px;
  border: 2px solid ${colors.blue};
  font-size: 14px;
  font-weight: 600;
  color: ${colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MinusIcon = styled.div`
  position: absolute;
  right: 64px;
  top: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  text-align: center;
  background-image: url(${minusIcon});
  background-size: 10px 3px;
  background-repeat: no-repeat;
  background-position: center;
`;

const PlusIcon = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  text-align: center;
  background-image: url(${plusIcon});
  background-size: 12px 12px;
  background-repeat: no-repeat;
  background-position: center;
`;

const BasketBox = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state);

  return (
    <Container>
      <Body>
        {basket.list.length === 0 ? (
          <EmptyResult label="Basket is empty" />
        ) : (
          <>
            {basket.list.map((item, index) => (
              <React.Fragment key={index}>
                <BodyItem>
                  <BodyItemLabel>{item.label}</BodyItemLabel>
                  <BodyItemPrice>₺ {item.price}</BodyItemPrice>
                  <MinusIcon
                    onClick={() => dispatch(decreaseAmount(item.id))}
                  />
                  <BodyItemAmount>{item.amount}</BodyItemAmount>
                  <PlusIcon onClick={() => dispatch(increaseAmount(item.id))} />
                </BodyItem>
              </React.Fragment>
            ))}
            <BodyTotal>
              <BodyTotalBox>
                ₺ {basket.total > 0 ? basket.total.toFixed(2) : 0}
              </BodyTotalBox>
            </BodyTotal>
          </>
        )}
      </Body>
    </Container>
  );
};

export default BasketBox;
