import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #e5e5e5;
}

button {
    cursor: pointer;
    padding: 0.5rem;

    border: none;

    transition: filter 0.5s;

    &:hover {
        filter: brightness(90%);
    }
}

.react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
}

.react-modal-content {
    background: #ffffff;
    border-radius: 0.25rem;
    
    padding: 0.5rem;
    position: relative;
    width: 100%;
    max-width: 576px;
}

.pagination {
    display: flex;
    justify-content: center;
    background: #ffffff;
    font-family: "Inter", sans-serif;

    li {
        list-style: none;
    }

    .item {
        color: white;
        cursor: pointer;
        background: #4C6FFF;

        display: grid;
        place-content: center;

        width: 30px;
        height: 30px;
        border-radius: 50%;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(90%);
        }
    }

    .item-buttons {
        background: #EDF2F7;
        cursor: pointer;
        border-radius: .50rem;
        padding: .5rem;
        display: grid;
        place-content: center;
        margin: 0 auto;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(90%);
        }
    }

    .item-active {
        opacity: 0.5;
    }
}
`;

export { GlobalStyles };
