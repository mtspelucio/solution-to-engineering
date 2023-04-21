import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        --primary: #0088ff;
        --black: #000;
        --white: #fff;
        --background: #0f0f0f;

        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .App{
        width: 100%;
        overflow-y: hidden;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        background: var(--black);
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        color: var(--white);
    }
    .flex{
        display: flex;
    }
`;