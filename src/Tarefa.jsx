import CartaoTarefa from "./components/CartaoTarefa/CartaoTarefa"
import Input from "./components/Input/Input"
import { useState } from 'react';
import "./Tarefa.css"


function Tarefa() {
  const [listaDeTarefas, setListaDeTarefas] = useState([])

  return (
    <div className="conteinerAplicacao">
      <div className="cabecalho">
        <h1 className="titulo">Minha Lista de Tarefas</h1>
        <Input
          listaDeTarefas={listaDeTarefas}
          setListaDeTarefas={setListaDeTarefas}
        />
      </div>
      <div className="conteudoLista">
        {listaDeTarefas.length > 0 ? (
          listaDeTarefas.map((tarefa, indice) => (
            <CartaoTarefa
              key={indice}
              indice={indice}
              tarefa={tarefa}
              setListaDeTarefas={setListaDeTarefas}
            />
          ))
        ) : (
          <p className="listaVazia">Nenhuma tarefa na lista ainda.</p>
        )}
      </div>
    </div>
  )
}

export default Tarefa