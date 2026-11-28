import { FooterStyled } from './Footer.styled';

export const Footer = () => {
    return(
        <FooterStyled>
            <div className="container">
                <img src="../../images/logo.png" alt="" />
                <div>
                    <h3 className='text'>Adress</h3>
                    <p className='text'>Svobody str. 35 Kyiv Ukraine</p>
                </div>
                <div>
                    <h3 className='text'>Contact us</h3>
                    <ul>
                        <li><a href=""><img src="../../images/ig.png" alt="" /></a></li>
                        <li><a href=""><img src="../../images/face.png" alt="" /></a></li>
                        <li><a href=""><img src="../../images/whatsapp.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </FooterStyled>
    )
}