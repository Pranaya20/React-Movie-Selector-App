import React from 'react';
import styled from 'styled-components';


const LabelStyled = styled.label`
  font-size: ${({ fontSize }) => fontSize || "15px"};
  line-height: ${({ lineHeight }) => lineHeight || "23px"};
  margin-bottom: ${props => props.marginBottom || '5px'};
  margin-top: ${props => props.marginTop || '10px'};
  color: ${({ color }) => color || '#001119'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  position: relative;
  &.error {
    color: #fc2424 !important;
  }
`;

const RequiredSymbolStyled = styled.span`
  color: #1cbee8;
  margin-left: 2px;
`;

export const RequiredSymbol = () => {
  return <RequiredSymbolStyled>*</RequiredSymbolStyled>;
};

const LabelComponents = ({required, labelname, color, fontSize, lineHeight, fontWeight, isError, marginBottom }) => {
  
  return (
    <LabelStyled
      // className={cx(className, isError && 'error')}
      color={color}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      marginBottom={marginBottom}
    >
      <span>{labelname}</span>
      {required && <RequiredSymbol />}
    </LabelStyled>
  );
};

export default LabelComponents;
