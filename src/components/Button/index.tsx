import React, { ButtonHTMLAttributes } from 'react';
import { Component, Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon?: JSX.Element;
  text: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  Icon,
  ...rest
}): JSX.Element => (
  <Component {...rest}>
    <Container>
      <span>{text}</span>
      {Icon}
    </Container>
  </Component>
);

Button.defaultProps = {
  Icon: undefined,
};

export { Button };
