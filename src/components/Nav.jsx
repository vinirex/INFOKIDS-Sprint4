import { } from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import '../css/style.scss';
import Logo from '../assets/logo.png';

function Nav() {
  return (
    <>
      <header>
        <nav className="topnav" id="myTopnav">
          <div className="topnav" id="myTopnav">
            <a className="navbar-brand disabled" aria-disabled="true">
              <img id='logo' src={Logo}/></a>
            <Link to="/Home" className="tlink">
              Home
            </Link>{' '}
            {''}
            <Link to="/sobre" className="tlink">
              Sobre
            </Link>
            <Link to="/portifolio" className="tlink">
              Portifólio
            </Link>
            <Link to="/contato" className="tlink">
              Solução
            </Link>
            <a href="javascript:void(0);" className="icon" onClick="myFunction()">
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Nav;
