import styled, { css } from 'styled-components';

interface InputWrapperProps {
  readonly $isError: boolean;
  readonly $isInputFocus: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>((props) => {
  const { $isError, $isInputFocus, theme } = props;
  const marginBottom = $isError ? '4px' : undefined;
  let borderColor = theme.colors.grayDark;
  if ($isError) borderColor = theme.colors.red;
  if ($isInputFocus) borderColor = theme.colors.white;

  return css`
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border-width: 1px;
    border-style: solid;
    border-color: ${borderColor};
    border-radius: 4px;
    margin-bottom: ${marginBottom};
  `;
});

export const StyledInput = styled.input`
  padding: 30px 20px 10px 20px;
  width: 100%;
  height: 100%;
  color: #fff;
  outline: none;
`;

interface InputLabelProps {
  readonly $isFocused: boolean;
  readonly $isInputFill: boolean;
}

export const InputLabel = styled.label<InputLabelProps>((props) => {
  const { $isFocused, $isInputFill, theme } = props;
  const top = $isInputFill || $isFocused ? '8px' : '50%';
  const translateY = $isInputFill || $isFocused ? undefined : 'translateY(-50%)';
  const fontSize =
    $isInputFill || $isFocused ? theme.fontSizes.medium : theme.fontSizes.semiRegular;
  const color = $isFocused ? theme.colors.white : theme.colors.grayLight;

  return css`
    position: absolute;
    transform: ${translateY};
    top: ${top};
    left: 20px;
    z-index: 1;
    color: ${color};
    font-size: ${fontSize};
    pointer-events: none;
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  `;
});
