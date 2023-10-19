import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MarginProps } from 'styled-system';
import { useTheme } from '@emotion/react';
import { InputLabel, InputWrapper, StyledInput } from './input.styles';
import { Column } from '../column';
import { Condition } from '../condition';
import { Text } from '../text';
import { Row } from '../row';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onBlur'>;

export interface InputProps extends HTMLInputProps, MarginProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  errorMessage?: string;
  autofocus?: boolean;
  iconSvg?: ReactNode;
}

export const Input = memo((props: InputProps) => {
  const {
    m,
    mt,
    mb,
    ml,
    mr,
    type = 'text',
    required,
    label,
    value,
    onChange,
    onBlur,
    errorMessage = '',
    autofocus,
    iconSvg,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeFocus = () => setIsFocused(true);

  const onChangeBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e.target.value);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value);

  return (
    <Column m={m} mt={mt} mb={mb} ml={ml} mr={mr}>
      <InputWrapper isInputFocus={isFocused} isError={!!errorMessage}>
        <Condition match={!!label}>
          <InputLabel $isInputFill={value?.length > 0} $isFocused={isFocused}>
            <Condition match={required}>
              {label}
              <Text ml='5px' color={errorMessage ? colors.red : colors.orange}>
                *
              </Text>
            </Condition>
            <Condition match={!required}>{label}</Condition>
          </InputLabel>
        </Condition>
        <StyledInput
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onChangeFocus}
          onBlur={onChangeBlur}
          {...otherProps}
        />
        <Row>{iconSvg}</Row>
      </InputWrapper>
      <Condition match={!!errorMessage}>
        <Text color={colors.red}>{errorMessage}</Text>
      </Condition>
    </Column>
  );
});

Input.displayName = 'InputComponent';
