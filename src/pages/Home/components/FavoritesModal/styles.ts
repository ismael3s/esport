import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

const Container = styled.div`
    font-family: "Inter", sans-serif;


    max-height: 600px;
    overflow-y: scroll;

    h1 {
        margin-top: .5rem;
        font-size: 1rem;
    }
`;

const CloseIcon = styled(AiOutlineClose)`
    position: absolute;
    top: 0.15rem;
    right: 0.5rem;

    cursor: pointer;

    height: 1.5rem;
`;

export { Container, CloseIcon };
