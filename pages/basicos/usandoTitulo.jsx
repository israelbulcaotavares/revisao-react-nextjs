import Titulo from "../../components/Titulo";

export default function usandoTitulo( ) {
  return (
    <div>
      <Titulo
        principal="Página de Cadastro"
        secundario="Incluir, alterar e excluir coisas!"
      />
      <Titulo
        principal="Página de Cadastro"
        secundario="Incluir, alterar e excluir coisas!"
        //pequeno={true} 
        /* ou */
        pequeno  /* da no mesmo sem o TRUE */
      />
    </div>
  );
}
