import styled from 'styled-components';

const Container = styled.header`
  background-color: #ffffff;

  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;

  max-width: 900px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  box-shadow: -3px 1px 12px -1px rgba(0, 0, 0, 0.61);
`;

const UserInformationContainer = styled.div`
  display: flex;
  padding: 0.5rem 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 0.5rem;

    span {
        margin-bottom: 0.5rem;
    }


    button {
     display: flex;
     align-items: center;
      padding: 0.3rem;
      border-radius: 0.5rem;
      background-color: #4C6FFF;
      color: white;
      font-weight: 700;

      svg {
        margin-left: 0.5rem;
      }
    }
`;

export {
  Container, Avatar, UserInformationContainer, InformationContainer,
};
