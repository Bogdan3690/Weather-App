import styled from 'styled-components';

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 28px 0;
  background: #FFB36C;
  color: #fff;

  .container {
    width: 100%;
    padding: 0 16px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
  }

  .container > img {
    width: 100px;
    height: 35px;
    object-fit: contain;
  }

  .text {
    color: #000000;
    margin: 0;
    font-size: 13px;
  }


  h3 {
    margin: 0 0 10px;
    font-size: 16px;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 16px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul img {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 768px) {
    padding: 32px 0;

    .container {
      max-width: 720px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  }

  @media (min-width: 1200px) {
    padding: 40px 0;

    .container {
      max-width: 1200px;
    }
  }
`;