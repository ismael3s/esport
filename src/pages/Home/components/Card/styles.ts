import styled from 'styled-components';

type ContainerProps = {
  backgroundColor?: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props): string => props.backgroundColor || '#ffffff'};
  border-radius: 1rem;

  margin: 0.8rem 0;
  padding: 0.5rem;

  h3 {
    font-family: 'Inter', sans-serif;
    color: #27272e;
    margin-bottom: 0.2rem;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
  }
`;

const badgesVariants = {
  primary: {
    backgroundColor: '#4C6FFF',
    color: '#FFFFFF',
  },

  secundary: {
    backgroundColor: '#E4ECF7',
    color: '#505780',
  },
};

type BadgeProps = {
  variant: 'primary' | 'secundary';
};

const Badge = styled.div<BadgeProps>`
  background: ${(props) => badgesVariants[props.variant].backgroundColor};
  border-radius: 6px;

  color: ${(props) => badgesVariants[props.variant].color};

  display: grid;
  place-content: center;

  font-weight: 700;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;

  text-align: center;

  margin: 1rem 0 1.5rem 0;

  width: 80px;
  height: 20px;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const FavoriteButton = styled.button`
  border: none;
  border-radius: 50%;

  cursor: pointer;

  width: 40px;
  height: 40px;

  transition: filter .2s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;

const Description = styled.p`
  color: #425466;

  font-family: 'Inter', sans-serif;

  word-wrap: break-word;
`;

export {
  Container, BadgeContainer, Badge, Description, FavoriteButton,
};
