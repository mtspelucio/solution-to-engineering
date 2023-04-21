import styled from 'styled-components';

export const Container = styled.footer`
    gap: 2rem;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;

    .logo{
        img{
            width: 5rem;
        }
        p{
            font-weight: 700;
            text-align: center;
        }

    }
    .description{
        p{
            color: var(--background);
            font-weight: 500;
        }
    }
`;
