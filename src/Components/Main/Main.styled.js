import styled from 'styled-components';

export const MainStyled = styled.main`
  width: 100%;
  background-color: #5108006b;
  color: #292929;

  .container {
    width: 100%;
    padding: 0 16px;
    margin: 0 auto;
  }

  .hero {
    min-height: 300px;
    padding: 45px 0;
    color: #fff;
    text-align: center;
    background-position: center;
    background-size: cover;
  }

  .hero h1 {
    font-size: 28px;
    margin: 0 0 20px;
  }

  .hero-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 13px;
  }

  .hero-info p {
    margin: 0;
  }

  .search-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 25px auto 0;
    max-width: 400px;
  }

  .search-form input {
    width: 100%;
    padding: 12px 16px;
    border: none;
    border-radius: 6px;
    outline: none;
  }

  .search-form button {
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    background: #ff9900;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }

  /* Weather cards */

  .weather-section {
    padding: 32px 0;
  }

  .weather-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .weather-list li {
    min-height: 180px;
    padding: 16px;
    border-radius: 10px;
    background: #f5eee8;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }

    .hero {
      min-height: 330px;
      padding: 55px 0;
    }

    .hero h1 {
      font-size: 38px;
    }

    .hero-info {
      flex-direction: row;
      justify-content: center;
      gap: 30px;
    }

    .search-form {
      flex-direction: row;
      max-width: 450px;
    }

    .weather-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1200px;
    }

    .hero {
      min-height: 360px;
      padding: 65px 0;
    }

    .hero h1 {
      font-size: 46px;
    }

    .weather-section {
      padding: 45px 0;
    }

    .weather-list {
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
  }
`;