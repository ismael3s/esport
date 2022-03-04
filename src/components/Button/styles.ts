import styled from 'styled-components';

const Component = styled.button`
  background-color: #4C6FFF;
  border-radius: 0.5rem;
  color: white;

  font-family: 'Inter', sans-serif;
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
      margin-left: 0.2rem;
  }
`;

export { Component, Container };
