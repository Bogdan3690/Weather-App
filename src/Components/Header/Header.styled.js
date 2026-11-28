import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: #fff;

  .container{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

     .nav-list {
      display: flex;
      gap: 20px;
      list-style: none;
      padding: 0px 33px;
    }

  
           .nav-list li{
      color: #000000;
    }




  @media (min-width: 1200px) {
    .container {
      max-width: 1200px;
    }

    .nav-list {
      gap: 32px;
    }
  }
`;