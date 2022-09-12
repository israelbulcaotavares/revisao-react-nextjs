import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilhos(){
    return (
        <div>
            <Lista>
                <Item conteudo="Item #011"/>
                <Item conteudo="Item #022"/>
                <Item conteudo="Item #033"/>
                <Item conteudo="Item #0133"/>
                <Item conteudo="Item #0233"/>
                <Item conteudo="Item #0333"/>
            </Lista>
        </div>
    )
}