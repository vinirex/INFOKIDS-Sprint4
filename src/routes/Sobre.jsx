import {} from 'react';
import '../css/style.scss';
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
            <div className='login'>
                <img className="ppl-grp" src={vini} alt="Vinicius Silva"/>
                <h2>Vinicius Silva</h2>
            </div>
            <div className='login'>
                <img className="ppl-grp" src={didoff} alt="Victor Didoff"/>
                <h2>Victor Didoff</h2>
            </div>
            <div className='login'>
                <img className="ppl-grp" src={diogo} alt="Diogo Julio"/>
                <h2>Diogo Julio</h2>
            </div>
        </section>
    </>
  );
}
export default Sobre;
