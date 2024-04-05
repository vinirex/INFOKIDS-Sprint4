import {} from 'react';
import '../css/estilo.css';
import '../css/style.css';

function Portifolio() {

  return (
    <>  
      
      <section className="blue-gradien">
        <div className ="div-Title">
            <h2>
                Entendimento do Problema
            </h2>
        </div>
        <div className="div-Content">
            <p className="content">
                Esse desafio que foi imposto para nós é de grande importância pelo fato de estar envolvendo crianças que estão em situação super complicada e seus parentes. E para podermos ajudá-los a ter uma boa relação entre médico e paciente que tivemos a ideia do  nosso projeto.
            </p>
        </div>
    </section>
    <section className="yellow-gradien">
        <div className="div-Title">
            <h2>
                Identificação do cliente e suas dores
            </h2>
        </div>
        <div className="div-Content">
            <p className="content">
                Um dos maiores problemas no tratamento de câncer em crianças é fazer com que os pais entendam os procedimentos e tratamentos que precisam ser feitos e também fazer com que as próprias crianças não tenham medo de fazer tais procedimentos e tratamentos, por que com esse “medo” acaba dificultando o trabalho dos médicos que é ajudar essas crianças.
            </p>
        </div>
    </section>
    <section className="blue-gradien">
        <div className="div-Title">
            <h2>
                Análise das dores do cliente
            </h2>
        </div>
        <div className="div-Content">
            <p className="content">
                Um dos maiores problemas no tratamento de câncer em crianças é fazer com que os pais entendam os procedimentos e tratamentos que precisam ser feitos e também fazer com que as próprias crianças não tenham medo de fazer tais procedimentos e tratamentos, por que com esse “medo” acaba dificultando o trabalho dos médicos que é ajudar essas crianças.
            </p>
        </div>
    </section>
    <section className="yellow-gradien">
        <div className="div-Title">
            <h2 className="yellow-gradien">
                Ideia de solução
            </h2>
        </div>
        <div className="contlist-sted">
            <p className="content-sted">
                Nas palavras de Mark Twain Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo. Ao investigar os fatores que estagnam o atendimento de exames no hospital da criança, o medo se destacou. Devido à falta de informação e o medo referente aos exames, muitas das crianças e seus acompanhantes ficam apreensivas e podem não estar devidamente preparados para os tais. Essa falta de preparo pode causar atraso dos exames ou até o cancelamento por ter filas muito grandes. A proposta agora é acabar com o medo e a desinformação no ambiente hospitalar usando a tecnologia.
            </p>
            <p className="content-sted">
                Primeiramente, é primordial informar tanto os pacientes(as crianças) quanto os acompanhantes sobre os procedimentos. Ademais, é necessária uma forma didática e mais humana para explicar os procedimentos. Sendo assim, atingimos essa meta por meio de:
            </p>
            <ul className="text-list">
                <li >
                    - Vídeos didáticos para os procedimentos de maior gargalo e/ou procedimentos que exigem preparação é possível interagir com as crianças de forma lúdica onde elas vão entender o motivo dos exames.
                </li>
                <li>
                    - O link do site com os vídeos será disponibilizado no meio de comunicação preferível por meio de mensagens enviadas através de aplicativos, e-mails juntamente com a confirmação de agendamento ou até mesmo na página de agendamento do HC iCr.    
                </li>
                <li>
                    - Os vídeos serão direcionados para o público infantil tendo em vista motiva-los a se prepararem e terem coragem para os procedimentos.
                </li>
                <li >
                    - Juntamente com os vídeos ira um documento explicativo para os acompanhantes.
                </li>
            </ul>
        </div>
    </section>
    </>
  );
}
export default Portifolio;