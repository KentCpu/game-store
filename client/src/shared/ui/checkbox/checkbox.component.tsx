import React, {
  ChangeEvent,
  FormEventHandler,
  forwardRef,
  HTMLAttributes,
  memo,
  ReactNode,
  Ref,
  useId,
  useState,
} from 'react';
import {
  VisuallyHiddenCheckbox,
  CheckboxIcon,
  UncheckedCheckboxIcon,
  StyledLabel,
} from 'shared/ui/checkbox/checkbox.styles';
import { Text } from 'shared/ui';
import { Condition } from 'shared/ui/condition';

type HTMLCheckboxProps = Omit<HTMLAttributes<HTMLInputElement>, 'onChange'>;

interface CheckboxProps extends HTMLCheckboxProps {
  children?: ReactNode;
  isChecked?: boolean;
  onChange?: (value: boolean) => void;
  onChangeNative?: FormEventHandler<HTMLInputElement>;
  disabled?: boolean;
  required?: boolean;
}

export const Checkbox = memo(
  forwardRef((props: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    /* eslint-disable react/prop-types */
    const {
      isChecked = false,
      disabled = false,
      onFocus,
      onBlur,
      onChange,
      onChangeNative,
      children,
      ...otherProps
    } = props;

    const id = useId();
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus: CheckboxProps['onFocus'] = (e) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur: CheckboxProps['onBlur'] = (e) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      setIsFocused(false);

      if (onChange) {
        onChange(e.target.checked);
      } else {
        onChangeNative?.(e);
      }
    };

    return (
      /* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
      <StyledLabel htmlFor={id}>
        <VisuallyHiddenCheckbox
          id={id}
          ref={ref}
          type='checkbox'
          checked={isChecked}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...otherProps}
        />
        <Condition match={isChecked}>
          <CheckboxIcon isFocus={isFocused} />
        </Condition>
        <Condition match={!isChecked}>
          <UncheckedCheckboxIcon isFocus={isFocused} />
        </Condition>
        <Text marginLeft='10px' color='rgba(255, 255, 255, 0.72)'>
          {children}
        </Text>
      </StyledLabel>
    );
  }),
);

Checkbox.displayName = 'Checkbox';
