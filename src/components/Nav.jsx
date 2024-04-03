import { } from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import '../css/style.css';
import Produto from '../assets/produto.png'

function Nav() {
  return (
    <>
      <header>
        <nav className="topnav" id="myTopnav">
          <div className="topnav" id="myTopnav">
            <a className="navbar-brand disabled" aria-disabled="true">
            <img src={Produto}/></a>
            <Link to="/" className="tlink">
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
              Contato
            </Link>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Nav;
