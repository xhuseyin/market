import React from "react";
import styled from "styled-components";
import colors from "../../theme/foundations/colors";

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

const Content = styled.div`
  height: 22px;
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
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

const RadioButtonGroup = ({ data, value, onChange }) => {
  return (
    <RadioGroup>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Content
            test={'test'}
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
