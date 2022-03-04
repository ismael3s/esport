import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  
  position: relative;
  max-width: 280px;
  width: 60%;

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  border-radius: 0.5rem;
  border: 1px solid #D0D4D9;
  background-color: #EDF2F7;
  
  padding: 0.5rem;
  padding-right: 2.1rem;

  font-family: "Inter", sans-serif;
  font-weight: 400;

  outline: none;

  flex: 1;
`;

export { Input, Container };
