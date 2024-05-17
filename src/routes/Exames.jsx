import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/style.scss';
import '../css/styles.scss';


export default function Exames() {



  //UTILIZANDO O useNavigate para redirecionar componentes
  const navigate = useNavigate();

  //CRIANDO A FUNCAO HANDLELOGOUT
  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("saindo do sistema...")
    navigate("/");
  }

  /* Hook-useState recebe a variavel e também modifica seu estado */
  const [exame, setExame] = useState([])

  /*Hook--useEffect realizar um efeito colateral, nesse exemplo ele vai pegar 
  a Api e converter para jspon e mostrar na tela */

  useEffect(() => {
    fetch("http://localhost:5000/exames")
      .then((resp) => {
        return resp.json();
      }).then((resp) => {
        setExame(resp)
      })
      /*tratamento de erros */
      .catch((error) => {
        console.log(error)
      })
  }, []) /*retorno callback */

  /*para apagar nesse exemplo deixe o id com o valor em string "id":"1" */
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/exames/${id}`, {

      method: 'delete',

    })
      //quando apagar fazum load da pagina 
      .then(() => {
        window.location.reload();
        console.log(id);
      })
  }


  return (
    <>
      <section>
      <section className=''>
        <button className='env' onClick={handleLogout}>Logout</button>
      </section>
      <section className="content tbrela">
        <h1 className='white'>Lista de Exames</h1>
        <div>
          <table class="table table-hover table-primary">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Exame</th>
                <th scope="col">Data</th>
              </tr>
            </thead>
            <tbody>
              {/* ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array */}
              {exame.map((item, indice) => (
                <tr key={indice}>
                  <td>{item.nome}</td>
                  <td>{item.tipoExame}</td>
                  <td>{item.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      </section>
    </>
  )
}