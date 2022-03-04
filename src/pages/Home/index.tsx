import React, { useState } from 'react';
import { LoadingScreen, Pagination } from '../../components';
import { useRepositores } from '../../hooks/useRepositories';
import {
  Cards, FavoritesModal, Header, SearchForm,
} from './components';
import { Wrapper, Container } from './styles';

const HomePage: React.FC = (): JSX.Element => {
  const {
    userRepos, isLoading, pageCount, onPageChange,
  } = useRepositores();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = (): void => setIsModalOpen((prevState) => !prevState);

  return (
    <Container>
      <Header onShowClick={onClose} />
      <Wrapper>
        <SearchForm />
        {userRepos?.userRepos && <Cards />}
        <Pagination pageCount={pageCount} onPageChange={onPageChange} />
      </Wrapper>
      <FavoritesModal isModalOpen={isModalOpen} onClose={onClose} />
      {isLoading && <LoadingScreen />}
    </Container>
  );
};
export { HomePage };
