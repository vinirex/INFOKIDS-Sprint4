import { } from 'react';
import '../css/estilo.css';
import Produto from '../assets/produto.png'

function Home() {
  return (
    <>
      <section id="home">
      <img src={Produto} alt="midical aparel and phone"/>
          <h1 style="color: white;">
            Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.
            - Mark Twain
          </h1>
      </section>
    <section id="problem" class="yellow-gradien">
        <h2>O Problema</h2>
        <p className="content">
            As principais problemáticas envolvidas são a desinformação e o medo pelo desconhecimento de
            procedimentos hospitalares, isso se origina por conta da disseminação de dados não verificados
            distribuídos em vários veículos de comunicação, desde redes sociais e mídias digitais até mesmo as
            conversações entre pessoas alienadas ao meio.
            Um exemplo clássico quando estamos falando de desinformação na área hospitalar, é o medo insensato de
            vacinas ou medicamentos, que por conta da disseminação da crença popular de que esses fazem mal a saúde,
            afeta a vida de diversas pessoas.
        </p>
    </section>
    <section id="motivation" className="blue-gradien">
        <h2>Motivação</h2>
        <p className="content">
            Tendo um desafio tão complexo quanto é lidar com pacientes e suas famílias já sensibilizadas pela
            situação em que se encontram, é importante sempre manter a seriedade mas ao mesmo tempo ser o mais
            humano possível, para assim cultivar uma conexão entre todos os envolvidos(médicos, enfermeiros,
            administração, pacientes e seus familiares).
            Sabemos que proporcionar uma experiência e atendimento agradável a pacientes e seus familiares em um
            ambiente hospitalar é uma árdua tarefa e exige a humanização de todas as etapas desse complexo processo,
            que inclui desde marcar o exame, seu preparo, sua realização e até mesmo o ambiente de espera.
            Tendo em vista as problemáticas que escolhemos abordar podemos destacar a falta de informações de
            pacientes e acompanhantes em relação aos procedimentos, causando demora na realização dos exames,
            gerando ansiedade nos pacientes e até mesmo cancelamento dos exames, trazendo como consequências falta
            de tratamento para essas pessoas podendo, dessa maneira, agravar seu quadro clínico.
        </p>
    </section>

    <section id="video" className="yellow-gradien">
        <div style="position: relative; width: 60%; height: 0; padding-top: 45%;
        padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
        border-radius: 8px; will-change: transform;">
            <iframe loading="lazy"
                style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF0Vy5f-sw&#x2F;watch?embed" allow="fullscreen">
            </iframe>
        </div>
    </section>
    <section id="objective" className="blue-gradien">
        <h2>Objetivo</h2>
        <div className="container">
            <p className="content">
                A meta a ser atingida é acabar com os gargalos e filas de exames importante. Através de um método
                interativo, podemos atacar
                diretamente a desinformação e o medo presentes na vida dos pacientes e seu acompanhantes.
                É primordial informar tanto os pacientes(as crianças) quanto os acompanhantes sobre os procedimentos.
                Ademais, é necessária uma forma didática e mais humana para explicar os procedimentos. Sendo assim,
                atingimos essa meta por meio de vídeos didáticos para os procedimentos de maior gargalo, e procedimentos
                que exigem
                preparação. É possível interagir com as crianças de forma lúdica, para que venham a entender os exames e
                procedimentos.

            </p>
            <img src="./img/kid.png" alt=""/>
        </div>
    </section>
    <section id="pros-cons" className="yellow-gradien">
        <h2>Entendimentos</h2>
        <div className="container">
            <div className="contlist">
                <p className="text-list">
                    Como a solução é bastante versatil e pode ser implementada de varias maneiras diferente, e isso gera
                    vantagens como por exemplo:
                <ul className="text-list">
                    <li>
                        - Atualizações e adições podem ser facilmente executadas.
                    </li>
                    <li>
                        - A solução pode ser integrada à infraestrutura já existente.
                    </li>
                    <li>
                        - O custo de manutenção é baixo.
                    </li>
                </ul>
                </p>
            </div>
            <div className="contlist">
                <p className="text-list">
                    Nenhuma solução é perfeita, consequentemente existem contra-pontos para a solução proposta. E são
                    eles:
                </p>
                <p className="text-list">
                    - Necessidade uma rede de wifi de guests.
                </p>
                <p className="text-list">
                    - Necessidade de uma melhora no serviço de internet.
                </p>
                <p className="text-list">
                    - Impacto na velocidade da rede de internet.
                </p>
            </div>
        </div>


    </section>

    </>
  );
}

export default Home;
