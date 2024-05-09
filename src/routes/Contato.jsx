import { } from 'react';
import '../css/estilo.css';
import '../css/style.scss';
import sub from '../assets/sub.png';
import med from '../assets/hand -w-syringe.png';


function Contato() {

  
  
  function mostrarExame (){
      let name = document.getElementById('nome').value;
      let exam = document.getElementById('exames').value;
      let date = document.getElementById('data').value;
  
      document.getElementById('exsangue-video').classList.add('display-none');
      document.getElementById('exsangue-video').classList.remove('display-center');
      document.getElementById('exsangue').classList.add('display-none');
      document.getElementById('reson-video').classList.add('display-none');
      document.getElementById('reson-video').classList.remove('display-center');
      document.getElementById('reson').classList.add('display-none');
  
      document.querySelector('#text').innerHTML = `<h1>Bem vindo(a) ${name} ao portal HC! Abaixo tem tudo que prescisa saber.<h1>`;
      if (exam === 'Exame de Sangue') {
          document.getElementById('form-test').classList.remove('active')
          document.getElementById('exsangue-video').classList.remove('display-none');
          document.getElementById('exsangue-video').classList.add('display-center');
          document.getElementById('exsangue').classList.remove('display-none');
      }
      else if (exam === 'Resonâcia Magnética'){
          document.getElementById('form-test').classList.remove('active')
          document.getElementById('reson-video').classList.remove('display-none');
          document.getElementById('reson-video').classList.add('display-center');
          document.getElementById('reson').classList.remove('display-none');
      }

      const btnSend = document.getElementById('enviar');
      btnSend.addEventListener('click', mostrarExame);

  }
  



  return (
    <>
      <section id="form-test" className="active">
        <form id="form-insert">
          <label form="nome">Nome:</label>
          <input type="text" name="nome" id="nome" />

          <label form="Exame">Exame:</label>
          <select id="exames" name="exames">
            <option value="Exame de Sangue">Exame de Sangue</option>
            <option value="Resonâcia Magnética">Resonacia Magnetica</option>
          </select>

          <label form="quantidade">Data do Exame:</label>
          <input type="date" name="data" id="data" />

          <button type="button" id="enviar" onClick={mostrarExame}>Pronto</button>
        </form>
        <h1 id='text'>
          Bem vindo(a) ao portal HC,
          Qual exame você irá fazer?
        </h1>
      </section>
      <section id="exsangue-video" className="yellow-gradien display-none">
        <div className='iframe'>
          <iframe loading="lazy" className='iframe-w' src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF0o077CFU&#x2F;watch?embed"
            allowfullscreen="allowfullscreen" allow="fullscreen">
          </iframe>
        </div>
      </section>
      <section id="exsangue" className="blue-gradien display-none">
        <h2>Exame de Sangue</h2>
        <div className="container">
          <div className="contlist">
            <p className="content">
              Um exame de sangue é um procedimento médico em que uma amostra de sangue é coletada para análise
              laboratorial. Essa análise pode revelar uma variedade de informações sobre a saúde de uma pessoa,
              como
              contagem de células sanguíneas, níveis de glicose, função dos órgãos, presença de infecções e muito
              mais.
            </p>
            <ul className="text-list">
              <li><b>Jejum:</b> Em alguns casos, você pode precisar não comer ou beber nada, exceto água, por 8 a
                12
                horas
                antes do exame.</li>

              <li><b>Medicações:</b> Informe seu médico sobre os remédios que toma para ver se precisa mudar algo
                antes
                do
                exame.</li>

              <li><b>Hidratação:</b> Beber água é geralmente bom, a menos que o médico diga o contrário.</li>

              <li><b>Vestuário:</b> Use roupas confortáveis e que permitam fácil acesso ao braço, pois é de lá que
                normalmente se tira sangue.</li>
            </ul>
          </div>
          <img className="img-ani" src={med} alt="hand with syringe"/>
        </div>
      </section>
      <section id="reson-video" className="yellow-gradien display-none">
        <div className='iframe'>
          <iframe loading="lazy" className='iframe-w' src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF0ozYMfWQ&#x2F;watch?embed"
            allowfullscreen="allowfullscreen" allow="fullscreen">
          </iframe>
        </div>
      </section>
      <section id="reson" className="blue-gradien display-none">
        <h2>Resonâcia Magnética</h2>
        <div className="container">
          <div className="contlist">
            <p className="content">
              A ressonância magnética (RM) é um exame médico que usa ímãs e ondas de rádio para criar imagens
              detalhadas do interior do corpo. É muito útil para diagnosticar problemas em órgãos, tecidos moles,
              ossos e outras estruturas.
            </p>
            <ul className="text-list">
              <li><b>Informações Médicas:</b> Informe ao médico sobre qualquer metal no corpo, alergias ou
                histórico de doenças, pois algumas condições podem afetar o exame </li>

              <li><b>Vestuário:</b> Vista-se com roupas confortáveis, preferencialmente sem peças com metal. Às
                vezes, pode ser fornecido um avental ou roupa hospitalar para o exame.</li>

              <li><b>Alimentação e Hidratação:</b> Em geral, não é necessário jejum, a menos que o médico
                especifique. Continue com a alimentação e a hidratação normal.</li>

              <li><b>Objetos de Metal:</b> Antes do exame, retire objetos metálicos como joias, piercings, óculos,
                chaves, cartões de crédito, etc. Esses itens podem interferir na máquina de ressonância
                magnética.</li>

              <li><b>Conforto:</b> Se você é claustrofóbico ou tem dificuldade em ficar quieto por um tempo,
                informe ao médico. Às vezes, pode ser oferecida uma medicação para ajudar a relaxar durante o
                exame.</li>
            </ul>
          </div>
          <img className="img-ani2" src={sub} alt="sub"/>
        </div>
      </section>
    </>
  );
}
export default Contato;