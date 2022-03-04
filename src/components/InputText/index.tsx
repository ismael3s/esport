import React, { InputHTMLAttributes } from 'react';
import { Container, Input } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  Icon?: JSX.Element;
};

const InputText: React.FC<InputProps> = ({
  Icon,
  ...rest
}): JSX.Element => (
  <Container>
    <Input {...rest} />
    {Icon}
  </Container>
);

InputText.defaultProps = {
  Icon: undefined,
};

export { InputText };
