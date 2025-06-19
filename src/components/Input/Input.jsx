import "./Input.css"
import { useState } from "react"

const Input = ({ listaDeTarefas, setListaDeTarefas }) => {
  const [entrada, setEntrada] = useState("")

  const adicionarTarefa = (evento) => {
    evento.preventDefault();
    setListaDeTarefas([...listaDeTarefas, entrada])
    setEntrada("")
  };

  return (
    <form className="formulario">
      <input
        className="campoDeEntrada"
        type="text"
        placeholder="Adicione uma tarefa"
        value={entrada}
        onChange={(evento) => setEntrada(evento.target.value)}
      />
      <button className="botaoAdicionar" onClick={adicionarTarefa}>
        Adicionar
      </button>
    </form>
  )
}

export default Input