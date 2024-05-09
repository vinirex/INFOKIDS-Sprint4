import { } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.scss';
import Logo from '../assets/logo.png';

function Nav() {
  function navResp() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
      <header>
        <nav className="topnav" id="myTopnav">
          <div className="topnav">
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
            <Link to="/admin" className="tlink">
              Admin
            </Link>
            <a href="javascript:void(0);" className="icon" onClick={navResp}>
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Nav;
