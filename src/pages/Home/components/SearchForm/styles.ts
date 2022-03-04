import styled from 'styled-components';

const Container = styled.div`
    border-radius: 1rem;
    background-color: #ffffff;

    margin: 0.5rem 0;
    padding: 0.5rem;
    
    font-family: 'Inter', sans-serif;
    
    max-width: 400px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export { Form, Container };
