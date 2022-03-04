import React from 'react';
import ReactModal from 'react-modal';
import { Card } from '..';
import { useRepositores } from '../../../../hooks/useRepositories';
import { CloseIcon, Container } from './styles';

const FavoritedRepositoriesCard: React.FC = (): JSX.Element => {
  const { favoritedRepositories } = useRepositores();

  return (
    <div>
      {favoritedRepositories?.map(
        ({
          description, forks_count, name, id, stargazers_count,
        }) => (
          <Card
            description={description}
            forks_count={forks_count}
            id={id}
            key={id}
            name={name}
            stargazers_count={stargazers_count}
            backgroundColor="#E5E5E5"
          />
        ),
      )}
    </div>
  );
};

type FavoritesModalProps = {
  onClose: () => void;
  isModalOpen: boolean;
};

const FavoritesModal: React.FC<FavoritesModalProps> = ({
  onClose,
  isModalOpen,
}): JSX.Element => {
  const { userProfile } = useRepositores();

  return (
    <ReactModal
      isOpen={isModalOpen}
      appElement={(document.getElementById('root') as HTMLElement) || undefined}
      onRequestClose={onClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <Container>
        <CloseIcon onClick={() => onClose()} />
        <h1>
          Repositories favorited from user:
          {' '}
          {userProfile.login}
        </h1>

        <FavoritedRepositoriesCard />
      </Container>
    </ReactModal>
  );
};

export { FavoritesModal };
