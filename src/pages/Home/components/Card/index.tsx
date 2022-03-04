import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useRepositores } from '../../../../hooks/useRepositories';
import { UserRepos } from '../../../../hooks/useRepositories/types';
import {
  Badge,
  BadgeContainer,
  Container,
  Description,
  FavoriteButton,
} from './styles';

type CardProps = UserRepos & {
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({
  forks_count,
  description,
  name,
  stargazers_count,
  id,
  backgroundColor,
}): JSX.Element => {
  const { onFavorite, favoritedRepositories } = useRepositores();

  return (
    <Container backgroundColor={backgroundColor}>
      <h3>{name}</h3>
      <BadgeContainer>
        <div>
          <Badge variant="secundary">
            Forks -
            {' '}
            {forks_count}
          </Badge>
          <Badge variant="primary">
            Stars -
            {' '}
            {stargazers_count}
          </Badge>
        </div>

        <FavoriteButton onClick={() => onFavorite({
          description, forks_count, id, name, stargazers_count,
        })}
        >
          {favoritedRepositories.some((repo): boolean => repo.id === id) ? (
            <AiFillHeart size={24} />
          ) : (
            <AiOutlineHeart size={24} />
          )}
        </FavoriteButton>
      </BadgeContainer>
      <Description>{description || 'No description'}</Description>
    </Container>
  );
};

const Cards = (): JSX.Element => {
  const { userRepos } = useRepositores();

  return (
    <div>
      {userRepos?.userRepos?.map(
        ({
          description, forks_count, name, stargazers_count, id,
        }) => (
          <Card
            key={id}
            id={id}
            description={description}
            forks_count={forks_count}
            name={name}
            stargazers_count={stargazers_count}
          />
        ),
      )}
    </div>
  );
};

Card.defaultProps = {
  backgroundColor: '#ffffff',
};

export { Card, Cards };
