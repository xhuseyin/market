import React from "react";
import styled from "styled-components";
import colors from "../../theme/foundations/colors";

const Filter = styled.div`
  width: auto;
  height: 30px;
  border-radius: 2px;
  display: flex;
  justify-content: flex-start;
  margin: 16px 0;
`;

const FilterButton = styled.div`
  width: 60px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  font-weight: 400;
  border-radius: 2px;
  margin-right: 8px;
  text-align: center;
  cursor: pointer;
  background-color: ${colors.white7};
  color: ${colors.blue};

  &:hover {
    background-color: ${colors.blue};
    color: ${colors.white7};
  }
`;

const ProductFilter = ({ relatedTypes, selectedTypes, selectType }) => {
  return (
    <Filter>
      {relatedTypes?.map((item, index) => (
        <React.Fragment key={index}>
          <FilterButton
            status={selectedTypes.includes(item) ? "active" : "passive"}
            onClick={() => {
              selectType(item);
            }}
          >
            {item}
          </FilterButton>
        </React.Fragment>
      ))}
    </Filter>
  );
};

export default ProductFilter;
