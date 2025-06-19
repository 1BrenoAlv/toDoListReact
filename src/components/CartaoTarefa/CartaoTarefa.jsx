import "./CartaoTarefa.css"

const CartaoTarefa = ({ tarefa, indice, setListaDeTarefas }) => {

  const excluirTarefa = () => {
    setListaDeTarefas(listaAtual => {
      return listaAtual.filter((_, i) => i !== indice)
    })
  }

  return (
    <div className="cartaoTarefa">
      <p>{tarefa}</p>
      <button className="botaoExcluir" onClick={excluirTarefa}>
        Excluir
      </button>
    </div>
  )
}

export default CartaoTarefa