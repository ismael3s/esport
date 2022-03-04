import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useRepositores } from '../../../../hooks/useRepositories';
import {
  Avatar, Container, UserInformationContainer, InformationContainer,
} from './styles';

type HeaderProps = {
  onShowClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowClick }): JSX.Element => {
  const { userProfile, userRepos, favoritedRepositoriesId } = useRepositores();

  return (
    <Container>
      <h1>Git Repositories</h1>

      {userRepos.totalCount && (
      <UserInformationContainer>
        <div>
          <Avatar src={userProfile.avatar_url} />
        </div>
        <InformationContainer>
          <span>
            {userProfile.login}
            {' '}
            {userRepos.totalCount}
            /
            {userProfile.public_repos}
            {' '}
            repositorie(s)
          </span>
          <span>
            You Favorited counter:
            {favoritedRepositoriesId.length}
            <br />
            <button type="button" onClick={() => onShowClick()}>
              Show Repositories
              <AiOutlineHeart />
            </button>
          </span>
        </InformationContainer>
      </UserInformationContainer>
      )}

    </Container>
  );
};
export { Header };
