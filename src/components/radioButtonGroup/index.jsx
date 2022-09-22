import React from "react";
import styled from "styled-components";
import colors from "../../theme/foundations/colors";
import checkBlueIcon from "../../assets/icons/check-blue.svg";

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const Icon = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 18px;
    border: 2px solid #dfdee2;
}
`;

const Item = styled.div`
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
    padding-left: 12px;
}
`;

const Content = styled.div.attrs((props) => ({
  status: props.status || "passive",
}))`
  height: 22px;
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) =>
    props.status === "active" &&
    ` 
    & > ${Icon} {
      border: 2px solid ${colors.blue};
      background-image: url(${checkBlueIcon});
      background-size: 10px 7px;
      background-repeat: no-repeat;
      background-position: center;
    }
    `}
`;

const RadioButtonGroup = ({ data, value, onChange }) => {
  return (
    <RadioGroup>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Content
            status={value && value === item.id ? "active" : "passive"}
            onClick={() => onChange(item.id)}
          >
            <Icon />
            <Item>{item.value}</Item>
          </Content>
        </React.Fragment>
      ))}
    </RadioGroup>
  );
};

export default RadioButtonGroup;
