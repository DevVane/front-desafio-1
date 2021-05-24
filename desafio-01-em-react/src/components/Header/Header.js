import './Header.css';
import logo from '../../assets/logo.svg';

function Header(){
    return(
        <header className="header"> 
            <img src={logo} alt="logo"/> 
            <div className="links">
                <a href="/">Início</a>
                <a href="/">Sobre</a>
                <a href="/">Contato</a>
            </div>
      </header>
    );
}

export default Header;