import styled from '@emotion/styled';

interface InputWrapperProps {
  readonly isError: boolean;
  readonly isInputFocus: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>((props) => {
  const { isError, isInputFocus, theme } = props;
  const marginBottom = isError ? '4px' : undefined;
  let borderColor = theme.colors.grayDark;
  if (isError) borderColor = theme.colors.red;
  if (isInputFocus) borderColor = theme.colors.white;

  return {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    flex: '1 1 100%',
    height: '60px',
    border: `1px solid ${borderColor}`,
    borderRadius: '4px',
    marginBottom,
  };
});

export const StyledInput = styled.input({
  padding: '30px 20px 10px 20px',
  width: '100%',
  height: '100%',
  color: '#fff',
  outline: 'none',
});

interface InputLabelProps {
  readonly $isFocused: boolean;
  readonly $isInputFill: boolean;
}

export const InputLabel = styled.label<InputLabelProps>((props) => {
  const { $isFocused, $isInputFill, theme } = props;
  const top = $isInputFill || $isFocused ? '8px' : '50%';
  const translateY = $isInputFill || $isFocused ? undefined : 'translateY(-50%)';
  const fontSize = $isInputFill || $isFocused ? theme.fontSizes.extra : theme.fontSizes.medium;
  const color = $isFocused ? theme.colors.white : theme.colors.grayLight;

  return {
    position: 'absolute',
    transform: translateY,
    top,
    left: '20px',
    zIndex: 1,
    color,
    fontSize,
    pointerEvents: 'none',
    transition: 'all 0.2s cubic-bezier(0, 0, 0.2, 1)',
  };
});
