import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 80vh;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 4.4rem;
        font-weight: 500;
    }

    .content{
        gap: 5rem;

        img{
            width: 50rem;
        }

        .text{
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p{
                font-size: 1.8rem;
                margin-top: 2rem;
            }
        }
    }

    @media (max-width: 425px){
        position: relative;

        h2{
            font-size: 3rem;
            z-index: 998;
        }

        .content{
            img{
                position: absolute;
                width: 100%;
            }
            .text{
                p{
                    font-size: 1.5rem;
                    z-index: 998;
                }
            }
            .text::before{
                content: "";
                width: 100%;
                height: 60vh;
                background: var(--black);
                opacity: .5;
                z-index: 1;
                position: absolute;
            }
        }
    }
`;
