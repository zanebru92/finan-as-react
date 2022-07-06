import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:30%;
  background: #FFF;
  border-radius: 5px;
  padding: 4px 16px;

  @media (max-width: 676px){
    width: 20%;
    p {
        font-size: 12px;
    }
    span {
        font-size: 20px
    }
    svg {
        display: none;
    }
  }

`;
export const Header = styled.header `
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1005;
    gap:.8rem;
    margin: 20px 0;

    svg {
        width: 25px;
        height: 25px;
        object-fit: cover;
    }
    
`
export const HeaderTitle = styled.p`
    font-size:1.5rem;
`
export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`


