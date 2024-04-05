import {} from 'react';
import '../css/estilo.css';
import '../css/style.css';
import vini from '../assets/vini-img.png'
import diogo from '../assets/diogo-img.png'
import didoff from '../assets/victor-img.png'

function Sobre() {
  return (
    <>
        <section id="home">
            <h1>
                Sobre o nosso grupo
            </h1>
        </section>
        <section id="grupo">
            <div>
                <img className="ppl-grp" src={vini} alt="Vinicius Silva"/>
                <p class="txt">Vinicius Silva</p>
            </div>
            <div>
                <img className="ppl-grp" src={didoff} alt="Victor Didoff"/>
                <p clasNames="txt">Victor Didoff</p>
            </div>
            <div>
                <img className="ppl-grp" src={diogo} alt="Diogo Julio"/>
                <p className="txt">Diogo Julio</p>
            </div>
        </section>
    </>
  );
}
export default Sobre;
