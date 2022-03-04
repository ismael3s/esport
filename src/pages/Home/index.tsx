import React, { useState } from 'react';
import { LoadingScreen } from '../../components';
import { useRepositores } from '../../hooks/useRepositories';
import {
  Cards, FavoritesModal, Header, SearchForm,
} from './components';
import { Wrapper, Container } from './styles';

const HomePage: React.FC = (): JSX.Element => {
  const { userRepos, isLoading } = useRepositores();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = (): void => setIsModalOpen((prevState) => !prevState);

  return (
    <Container>
      <Header onShowClick={onClose} />
      <Wrapper>
        <SearchForm />
        {userRepos?.userRepos && <Cards />}
      </Wrapper>
      <FavoritesModal isModalOpen={isModalOpen} onClose={onClose} />
      {isLoading && <LoadingScreen />}
    </Container>
  );
};
export { HomePage };
