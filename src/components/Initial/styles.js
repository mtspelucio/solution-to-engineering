import styled from 'styled-components';

export const Container = styled.div`
    margin: 10rem 0; 
    width: 90%;
    height: 80vh;
    display: grid;
    grid-template-columns: 55rem 1fr;
    justify-content: center;
    /* position: relative; */

    img{
        position: absolute;
        width: 100%;
        /* height: 100vh; */
        object-fit: cover;
        left: 0;
        top: 0;
        opacity: .4;
    }
    
    .text{
        padding: 15rem 0;
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
        /* flex: 1; */
        position: absolute;
        top: 15rem;
        right: 0;
        width: 60%;
        height: 50vh;
    }

    @media (max-width: 425px){
        display: flex;
        flex-direction: column;
        margin: 3rem 0 20rem 0; 


        .text{
            margin-top: 40rem;
            padding: 0;

            h2, h1{
                font-size: 2.4rem;
            }
            P{
                font-size: 1.5rem;
                margin-top: 2rem;

            }
        }

        .model{
            top: 0;
            width: 100%;
        }
    }
`;
