import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import colors from "../../theme/foundations/colors";

const CbxGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const CbxGroupSearch = styled.input`
  height: 44px;
  border: 2px solid ${colors.white3};
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  line-height: 44px;
  padding-left: 16px;
  color: ${colors.gray1};
`;

const CbxGroupBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 124px;
    overflow-y: scroll;
    margin-top: 16px;
    padding: 3px;

    &::-webkit-scrollbar-track {
        border-radius: 2px;
      }
      
      &::-webkit-scrollbar {
        width: 4px;
        background-color: ${colors.white6};
      }
      
      &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        width: 4px;
        background-color: ${colors.white3};
      }
  }
  `;

const CbxGroupItem = styled.div`
    height: 22px;
    display: flex;
    margin-bottom: 16px;
    cursor: pointer;

    &:last-child {
        margin-bottom: 0;
    }
  }
  `;

const CbxGroupItemIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  background: ${colors.white2};
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  }
  `;

//   .market-checkbox-group-item[status="active"]
//     > .market-checkbox-group-item-icon {
//     background-color: var(--themeColor);
//     background-image: url("../../assets/icons/icon-check-white.png");
//     background-size: 10px 7px;
//     background-repeat: no-repeat;
//     background-position: center;
//   }

const CbxGroupItemLabel = styled.div`
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
    padding-left: 12px;
    width: 200px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  `;

const CheckboxGroup = ({ data, value, onChange, placeholder }) => {
  const [searchParameter, setSearchParameter] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const searchInput = useRef();

  useEffect(() => {
    const filteredDataArray = [];
    if (searchParameter) {
      data.forEach((item) => {
        let searchItemUpper = item.label.toUpperCase();
        searchItemUpper = searchItemUpper.replace("İ", "I");
        searchItemUpper = searchItemUpper.replace("Ü", "U");
        searchItemUpper = searchItemUpper.replace("Ö", "O");
        searchItemUpper = searchItemUpper.replace("Ç", "C");
        searchItemUpper = searchItemUpper.replace("Ş", "S");
        const searchedContains = searchItemUpper.includes(searchParameter);
        if (searchedContains) {
          filteredDataArray.push(item);
        }
      });
      setFilteredData(filteredDataArray);
    } else {
      setFilteredData(data);
    }
  }, [data, searchParameter]);

  let timeoutId = 0;
  const onSearch = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      let searchValUpper = searchInput.current.value.toUpperCase();
      searchValUpper = searchValUpper.replace("İ", "I");
      searchValUpper = searchValUpper.replace("Ü", "U");
      searchValUpper = searchValUpper.replace("Ö", "O");
      searchValUpper = searchValUpper.replace("Ç", "C");
      searchValUpper = searchValUpper.replace("Ş", "S");
      setSearchParameter(searchValUpper);
    }, 1000);
  };

  return (
    <CbxGroup>
      <CbxGroupSearch
        ref={searchInput}
        placeholder={placeholder}
        onChange={() => onSearch()}
      />
      <CbxGroupBody>
        {filteredData.map((item, index) => (
          <React.Fragment key={index}>
            <CbxGroupItem
              status={value?.includes(item.id) ? "active" : "passive"}
              onClick={() => onChange(item.id)}
            >
              <CbxGroupItemIcon />
              <CbxGroupItemLabel>{item.label}</CbxGroupItemLabel>
            </CbxGroupItem>
          </React.Fragment>
        ))}
      </CbxGroupBody>
    </CbxGroup>
  );
};

export default CheckboxGroup;
