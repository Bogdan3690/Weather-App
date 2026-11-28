import { HeaderStyled } from './Header.styled';

export const Header = () => {
    return(
        <HeaderStyled>
            <div className="container">
                <img src="../../images/logo.png" alt="" />
                <ul className='nav-list'>
                    <li><a href="">Who we are</a></li>
                    <li><a href="">Contacts</a></li>
                    <li><a href="">Menu</a></li>
                </ul>
                <div className="profile">
                <button>Sing Up</button>
                <img src="" alt="" />
                </div>
            </div>
        </HeaderStyled>
    )
}