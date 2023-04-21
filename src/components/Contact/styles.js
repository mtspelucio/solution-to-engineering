import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    flex-direction: column;
    align-items: center;
    
    img{
        width: 100%;
        margin-top: 5rem;
    }
    
    .content{
        padding: 3rem;
        width: 70%;
        background: var(--background);
        border-radius: 1.5rem;
        position: absolute;
        bottom: 10rem;

        h2{
            font-size: 4.4rem;
            font-weight: 500;
        }
        p{
            margin: 2rem 0 4rem 0;
        }

        .info{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        span{
            align-items: center;
            justify-content: center;
            border: 2px solid var(--primary);
            border-radius: 1rem;
            padding: 1rem;
            width: auto;

            img{
                width: 2rem;
                margin: 0;
            }
            p{
                margin: 0 1rem;
            }
        }
    }
`;