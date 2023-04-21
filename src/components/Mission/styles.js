import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
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
            align-items: center;

            p{
                font-size: 1.8rem;
                margin-top: 1rem;
            }
        }
    }
`;
