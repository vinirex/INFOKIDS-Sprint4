import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'


export default function Exames(){

/* Hook-useState recebe a variavel e também modifica seu estado */
 const[exame,setExame]=useState([])

 /*Hook--useEffect realizar um efeito colateral, nesse exemplo ele vai pegar 
 a Api e converter para jspon e mostrar na tela */

 useEffect(()=>{
    fetch("http://localhost:5000/exames")
    .then((resp)=>{
        return resp.json();
    }).then((resp)=>{
        setExame(resp)
    })
    /*tratamento de erros */
    .catch((error)=>{
        console.log(error)
    })
 },[]) /*retorno callback */

/*para apagar nesse exemplo deixe o id com o valor em string "id":"1" */
 const handleDelete =(id)=>{
    fetch(`http://localhost:5000/exames/${id}`,{
      
    method:'delete',

    })
    //quando apagar fazum load da pagina 
    .then(()=>{
        window.location.reload();
        console.log(id);
    })
 }


    return(
        <section className="produtos">
            <h1>LISTA DEEXAMES</h1>

            <div>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>TIPO DE EXAME</th>
              <th>DATA</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {/* ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array */}
            {exame.map((item, indice) => (
              <tr key={indice}>
                <td>{item.nome}</td>
                <td>{item.tipoExame}</td>
                <td>{item.data}</td>
                <td></td>            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </section>
    )
}