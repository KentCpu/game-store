import styled from '@emotion/styled';
import _CheckboxIcon from 'shared/assets/icons/checkbox-checked.svg';
import _UncheckedCheckboxIcon from 'shared/assets/icons/checkbox-unchecked.svg';
import isPropValid from '@emotion/is-prop-valid';

export const StyledLabel = styled.label({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const VisuallyHiddenCheckbox = styled.input({
  position: 'absolute',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  border: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
});

const baseStyleCheckbox = {
  display: 'inline-block',
  width: '34px',
  height: '34px',
  padding: '5px',
};

const hoverStyleCheckbox = {
  backgroundColor: 'rgba(255, 255, 255, 0.16)',
  borderRadius: '4px',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
};

interface CheckboxIconProps {
  isFocus: boolean;
}

export const CheckboxIcon = styled(_CheckboxIcon, {
  shouldForwardProp: (prop) => isPropValid(prop),
})<CheckboxIconProps>(
  {
    fill: '#0074E4',
    stroke: 'rgba(0, 0, 0, 0.93)',
    color: '#fff',
    ':hover': {
      ...hoverStyleCheckbox,
    },
    ...baseStyleCheckbox,
  },
  (props) => props.isFocus && hoverStyleCheckbox,
);

export const UncheckedCheckboxIcon = styled(_UncheckedCheckboxIcon, {
  shouldForwardProp: (prop) => isPropValid(prop),
})<CheckboxIconProps>(
  {
    fill: 'rgba(255, 255, 255, 0.72)',
    ':hover': {
      ...hoverStyleCheckbox,
    },
    ...baseStyleCheckbox,
  },
  (props) => props.isFocus && hoverStyleCheckbox,
);
