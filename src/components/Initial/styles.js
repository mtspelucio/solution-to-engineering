import styled from 'styled-components';

export const Container = styled.div`
    padding: 10rem 0;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    justify-items: center;
    
    .text{
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
        width: 100%;
        h2, h1{
            font-size: 4.4rem;
            font-weight: 500;
        }
        h1{
            font-weight: 700;
        }
        P{
            margin-top: 4rem;
            font-size: 1.8rem;
        }

        button{
            margin-top: 2rem;
            max-width: 20rem;
            padding: 1rem;
            border: none;
            border-radius: .5rem;
            background: var(--primary);
            color: var(--white);
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
    img{
        width: 50rem;
        opacity: .5;
    }
`;
