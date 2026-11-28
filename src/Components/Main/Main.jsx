// import { fetchWeather } from './servises/service'
import { MainStyled } from './Main.styled';

export const Main = () => {
  return (
    <MainStyled>
      <section className="hero">
        <div className="container">
        <h1>Weather dashboard</h1>
        <div>
          <p>
            Create your personal list of favorite cities and always be aware of
            the weather.
          </p>
          <p>Date</p>
          </div>
          <form action="">
          <input type="text" />
          <button>Search</button>
          </form>
        </div>
      </section>
      <section>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </section>
    </MainStyled>
  );
};
