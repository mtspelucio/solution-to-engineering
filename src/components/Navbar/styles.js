import styled from 'styled-components';

export const Container = styled.nav`
    background-color: var(--background);
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    position: fixed;
    top: 0;
    z-index: 999;

    .logo{
        align-items: center;
        gap: 1rem;
        font-weight: 700;
        font-size: 2rem;
        cursor: pointer;

        img{
            width: 5rem;
        }
    }
    .menu{
        ul{
            list-style: none;
            gap: 6rem;

            li{
                font-weight: 500;
                cursor: pointer;
                
                :hover{
                    font-weight: 700;

                    ::after{
                        content: '';
                        display: block;
                        outline: .2rem solid #fff;
                        background: var(--white);
                        position: relative;
                        top: 2.5rem;
                    }
                }
            }
        }
    }
`;
