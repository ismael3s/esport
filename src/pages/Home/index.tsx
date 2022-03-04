import React, { useState } from 'react';
import { LoadingScreen, Pagination } from '../../components';
import { useRepositores } from '../../hooks/useRepositories';
import {
  Cards, FavoritesModal, Header, SearchForm,
} from './components';

const HomePage: React.FC = (): JSX.Element => {
  const { userRepos, isLoading } = useRepositores();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = (): void => setIsModalOpen((prevState) => !prevState);

  return (
    <>
      <Header onShowClick={onClose} />
      <SearchForm />
      {userRepos?.userRepos && <Cards />}
      <FavoritesModal isModalOpen={isModalOpen} onClose={onClose} />
      {isLoading && <LoadingScreen />}
      <Pagination />
    </>
  );
};
export { HomePage };
