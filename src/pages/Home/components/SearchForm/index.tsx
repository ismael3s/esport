import React from 'react';
import { AiFillGithub, AiOutlineSearch } from 'react-icons/ai';
import { Button, InputText } from '../../../../components';
import { useRepositores } from '../../../../hooks/useRepositories';
import { Container, Form } from './styles';

const SearchForm = (): JSX.Element => {
  const { onSubmit } = useRepositores();

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <InputText
          name="username"
          Icon={<AiFillGithub size={24} />}
          placeholder="Github Username"
          autoComplete="off"
          autoCorrect="off"
        />

        <Button text="Search" Icon={<AiOutlineSearch size={20} />} />
      </Form>
    </Container>
  );
};

export { SearchForm };
