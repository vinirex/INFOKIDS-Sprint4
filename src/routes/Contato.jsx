import { } from 'react';
import '../css/estilo.css';
import sub from '../assets/sub.png';
import med from '../assets/hand -w-syringe.png';

function Contato() {
  return (
    <>
      <section id="form-test" class="active">
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

          <button type="button" id="enviar">Pronto</button>
        </form>
        <h1>
          Bem vindo(a) ao portal HC,
          Qual exame você irá fazer?
        </h1>
      </section>
      <section id="exsangue-video" class="yellow-gradien display-none">
        <div className='iframe'>
          <iframe loading="lazy" className='iframe-w' src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF0o077CFU&#x2F;watch?embed"
            allowfullscreen="allowfullscreen" allow="fullscreen">
          </iframe>
        </div>
      </section>
      <section id="exsangue" class="blue-gradien display-none">
        <h2>Exame de Sangue</h2>
        <div class="container">
          <div class="contlist">
            <p class="content">
              Um exame de sangue é um procedimento médico em que uma amostra de sangue é coletada para análise
              laboratorial. Essa análise pode revelar uma variedade de informações sobre a saúde de uma pessoa,
              como
              contagem de células sanguíneas, níveis de glicose, função dos órgãos, presença de infecções e muito
              mais.
            </p>
            <ul class="text-list">
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
          <img class="img-ani" src={med} alt="hand with syringe"/>
        </div>
      </section>
      <section id="reson-video" class="yellow-gradien display-none">
        <div className='iframe'>
          <iframe loading="lazy" className='iframe-w' src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF0ozYMfWQ&#x2F;watch?embed"
            allowfullscreen="allowfullscreen" allow="fullscreen">
          </iframe>
        </div>
      </section>
      <section id="reson" class="blue-gradien display-none">
        <h2>Resonâcia Magnética</h2>
        <div class="container">
          <div class="contlist">
            <p class="content">
              A ressonância magnética (RM) é um exame médico que usa ímãs e ondas de rádio para criar imagens
              detalhadas do interior do corpo. É muito útil para diagnosticar problemas em órgãos, tecidos moles,
              ossos e outras estruturas.
            </p>
            <ul class="text-list">
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
          <img class="img-ani2" src={sub} alt="sub"/>
        </div>
      </section>
    </>
  );
}
export default Contato;