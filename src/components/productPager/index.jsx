import React from "react";
import styled from "styled-components";
import colors from "../../theme/foundations/colors";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";

const Pagination = styled.div`
  width: inherit;
  margin-top: 32px;
  margin-bottom: 136px;
  height: 40px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageItem = styled.div`
  width: 62px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const PageItemLabel = styled.div`
  width: 31px;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.color};
`;

const DirectionIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftIcon = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${arrowLeftIcon});
`;
const RightIcon = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${arrowRightIcon});
`;

const Container = styled.div`
  width: auto;
  height: 40px;
  border-radius: 2px;
  display: flex;
  margin-left: 50px;
  margin-right: 50px;
`;

const Content = styled.div`
  width: 32px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  color: ${colors.gray};

  ${(props) =>
    props.status === "active" &&
    `
    background-color: ${colors.blue};
    color: ${colors.white};
    border-radius: 2px;
    `}
`;

const ProductPager = ({ activePage, onChange, dataCount, itemCount }) => {
  const pageCount = parseInt(dataCount / itemCount) + 1;

  return (
    <Pagination>
      <PageItem onClick={() => onChange(activePage === 1 ? 1 : activePage - 1)}>
        <DirectionIcon>
          <LeftIcon />
        </DirectionIcon>
        <PageItemLabel color={colors.blue}>Prev</PageItemLabel>
      </PageItem>

      <Container>
        {pageCount <= 9 && (
          <>
            {[...Array(pageCount)].map((x, i) => (
              <React.Fragment key={i}>
                <Content
                  onClick={() => onChange(i + 1)}
                  status={i + 1 === activePage ? "active" : "passive"}
                >
                  {i + 1}
                </Content>
              </React.Fragment>
            ))}
          </>
        )}
        {pageCount > 9 && (
          <>
            {[...Array(pageCount)].map((x, i) => (
              <React.Fragment key={i}>
                {i + 1 <= 4 && (
                  <Content
                    onClick={() => onChange(i + 1)}
                    status={i + 1 === activePage ? "active" : "passive"}
                  >
                    {i + 1}
                  </Content>
                )}
              </React.Fragment>
            ))}
            <Content>...</Content>
            {[...Array(pageCount)].map((x, i) => (
              <React.Fragment key={i}>
                {pageCount - 4 < i + 1 && (
                  <Content
                    onClick={() => onChange(i + 1)}
                    status={i + 1 === activePage ? "active" : "passive"}
                  >
                    {i + 1}
                  </Content>
                )}
              </React.Fragment>
            ))}
          </>
        )}
      </Container>
      <PageItem
        onClick={() =>
          onChange(activePage === pageCount ? pageCount : activePage + 1)
        }
      >
        <PageItemLabel color={colors.gray}>Next</PageItemLabel>
        <DirectionIcon>
          <RightIcon />
        </DirectionIcon>
      </PageItem>
    </Pagination>
  );
};

export default ProductPager;
