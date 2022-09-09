export default function Repeticao1() {
  const listaAprovados = [
    "João",
    "Maria",
    "Ana",
    "Bia",
    "Carlos",
    "Daniel",
    "Laura",
  ];

//   function renderizarLista() { 
//     const itens = []

//     for (let index = 0; index < listaAprovados.length; index++) {
//         itens.push(<li key={index}>{listaAprovados[index]}</li>)
//     }

//    return itens 
//   }

function renderizarLista(){
    return listaAprovados.map(function(nome, i){
        return <li key={i} >{nome}</li>
    })
}


    return (
        <ul>
            {renderizarLista()}
        </ul>
    ) 
  }

  
 
