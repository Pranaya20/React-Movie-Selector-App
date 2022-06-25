import React from 'react';
import styled from 'styled-components';
import Fonts from '../../Design/Fonts';
import Colors from '../../Design/Colors';

export const FormCheck = styled.div`
  position: relative;
  display: flex;
  .checked-box {
    position: unset !important;
    left: auto;
    top: auto;
    + span {
      color: #ced8de;
      font-size: 15px;
      line-height: 23px;
      font-weight: 500;
      vertical-align: middle;
      margin-left: 10px;
    }
    + .checked-label {
      color: #1cbee8 !important;
    }
  }
  @media (max-width: 1550px) {
    .checked-box {
      + span {
        font-size: 14px;
      }
    }
  }
  @media (max-width: 767px) {
    .checked-box {
      + span {
        font-size: 13px;
      }
    }
  }
`;

const FormControlWrapper = styled.div`
  position: relative;
`;

const InputComponentStyled = styled.input`
  position: relative !important;
  width: ${props => props.width || '50px'};
  height: ${({ height }) => height || '50px'}!important;
  margin-bottom: ${props => props.marginBottom || '0px'};
  color: #001119 !important;
  font-size: ${({ fontSize }) => fontSize || Fonts.fs_15} !important;
  font-weight: ${({ fontWeight }) => fontWeight || Fonts.fw_500} !important;
  border: 0px !important;
  border-radius: 8px !important;
  background: ${({ whitebackground, background }) =>
    whitebackground ? Colors.whiteColor : background ? background : '#f5f8fa'} !important;
  transition: all 0.3s ease !important;
  -webkit-appearance: inherit !important;
  outline: 0 !important;
  font-family: 'Sofia Pro', sans-serif !important;
  &::placeholder {
    font-size: ${Fonts.fs_15} !important;
    font-weight: 400 !important;
    color: #ced8de !important;
  }
  &.error {
    background: #fc24240d !important;
    border: 1px solid #fc2424 !important;
    color: #fc2424 !important;
    &::placeholder {
      color: #fc2424 !important;
    }
  }
  &.valid {
    background: ${Colors.whiteColor} !important;
    border: 1px solid #1cbee8 !important;
    color: #1cbee8 !important;
    &::placeholder {
      color: #1cbee8 !important;
    }
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${Colors.whiteColor} inset !important;
    -webkit-text-fill-color: #1cbee8 !important;
    border: 1px solid #1cbee8 !important;
  }
  @media (max-width: 1550px) {
    font-size: ${Fonts.fs_14} !important;
    height: 50px !important;
    &::placeholder {
      font-size: ${Fonts.fs_14} !important;
    }
  }
  @media (max-width: 767px) {
    font-size: ${Fonts.fs_13} !important;
    &::placeholder {
      font-size: ${Fonts.fs_13} !important;
    }
  }
`;

const PrePendTextStyled = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  margin: auto;
  z-index: 1;
  height: 20px;
  font-size: ${Fonts.fs_15};
  font-weight: bold;
  &.error {
    color: #fc2424 !important;
  }
`;
const PrePendIconStyled = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  margin: auto;
  z-index: 1;
  @media (max-width: 767px) {
    width: 16px;
  }
`;
const AppendIconStyled = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 15px;
  margin: auto;
  z-index: 1;
  @media (max-width: 767px) {
    width: 17px;
  }
`;

const InputComponent = ({
  rootClassName,
  className,
  PrePendText,
  PrePendIcon,
  AppendIcon,
  type,
  name,
  value,
  placeholder,
  height,
  whitebackground,
  background,
  onIconClick,
  onChange,
  onBlur,
  onFocus,
  showPasswordChecker,
  fontSize,
  fontWeight,
  disabled,
  width,
  marginBottom,
 
}) => {
  return (
    <React.Fragment>
      <FormControlWrapper className={rootClassName}>
        <InputComponentStyled
          type={type || 'text'}
          name={name}
          value={value}
          placeholder={placeholder || ''}
          isIcon={PrePendIcon}
          isPreText={PrePendText}
          height={height}
          whitebackground={whitebackground}
          background={background}
          autoComplete={type === 'password' ? 'new-password' : 'off'}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          fontSize={fontSize}
          fontWeight={fontWeight}
          disabled={disabled}
          width={width}
          marginBottom={marginBottom}
        />
        {AppendIcon && <AppendIconStyled src={AppendIcon} alt={name} onClick={onIconClick} />}
      </FormControlWrapper>
    </React.Fragment>
  );
};

export default InputComponent;
