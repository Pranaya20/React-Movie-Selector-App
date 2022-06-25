import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fonts from '../../Design/Fonts';
import Colors from '../../Design/Colors';

const LinkStyled = styled.div`
  a {
    display: block;
    color: ${props => props.color || Colors.whiteColor};
    font-size: ${props => props.fontSize || `${Fonts.fs_16}`} !important;
    font-weight: ${props => props.fontWeight || `${Fonts.fw_500}`} !important;
    line-height: 1 !important;
    padding: ${props => props.padding || `${Fonts.fs_20}`} !important;
    margin: ${props => props.margin || '0px'};
    background: ${props => props.background || Colors.buttonBGColor};
    border: ${props => (props.border ? props.border : 'none')} !important;
    border-radius: ${props => props.borderRadius || '8px'} !important;
    text-transform: ${props => props.textTransform || 'uppercase'};
    width: ${props => props.width || 'auto'};
    min-width: ${props => props.minWidth || ''};
    display: ${props => props.display || ''};
`;

const ButtonStyled = styled.button`
  disabled:${props => props.disabled || "none"};
  color: ${props => props.color || Colors.whiteColor};
  font-size: ${props => props.fontSize || `${Fonts.fs_16}`} !important;
  font-weight: ${props => props.fontWeight || `${Fonts.fw_500}`} !important;
  line-height: 1 !important;
  padding: ${props => props.padding || `${Fonts.fs_20}`} !important;
  margin: ${props => props.margin || '0px'};
  background: ${props => props.background || Colors.buttonBGColor};
  border: ${props => (props.border ? props.border : 'none')} !important;
  border-radius: ${props => props.borderRadius || '8px'} !important;
  text-transform: ${props => props.textTransform || 'uppercase'};
  width: ${props => props.width || 'auto'};
  min-width: ${props => props.minWidth || ''};
  display: ${props => props.display || ''};
`;

export const Button = ({
  className,
  type,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  padding,
  margin,
  background,
  border,
  borderRadius,
  boxShadow,
  textTransform,
  textDecoration,
  display,
  loading,
  width,
  minWidth,
  text,
  onClick,
  disabled,
  boxShadowVisible,
  showBoxShadowOnHover,
  isLink,
  to,
}) => {
    console.log("text=",text);
  return isLink ? (
    <LinkStyled
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      padding={padding}
      margin={margin}
      background={background}
      border={border}
      borderRadius={borderRadius}
      textTransform={textTransform}
      textDecoration={textDecoration}
      boxShadow={boxShadow}
      display={display}
      width={width}
      minWidth={minWidth}
    >
      <Link to={to}>{text}</Link>
    </LinkStyled>
  ) : (
    <ButtonStyled
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      padding={padding}
      margin={margin}
      background={background}
      border={border}
      borderRadius={borderRadius}
      textTransform={textTransform}
      textDecoration={textDecoration}
      boxShadow={boxShadow}
      display={display}
      width={width}
      minWidth={minWidth}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      shadowVisible={boxShadowVisible}
      showBoxShadowOnHover={showBoxShadowOnHover}
    >
      {type}
    </ButtonStyled>
  );
};

