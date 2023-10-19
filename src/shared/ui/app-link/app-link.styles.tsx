import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { typography, border, space } from 'styled-system';
import isPropValid from '@emotion/is-prop-valid';

export const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => isPropValid(prop),
})(typography, border, space, ({ color }) => ({
  color,
}));
