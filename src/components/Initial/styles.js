import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 5rem 0;*/
    margin: 10rem 0; 
    width: 90%;
    display: grid;
    grid-template-columns: 55rem 1fr;
    justify-items: center;
    
    .text{
        flex-direction: column;
        justify-content: center;

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
    .model{
        flex: 1;
        width: 100%;
        height: calc(100vh - 15rem);
    }
`;
