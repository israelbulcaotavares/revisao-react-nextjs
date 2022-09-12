import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Família {props.familia}</h1>
            <Filho nome="Pedro" familia={props.familia}/>
            <Filho nome="Joana"  familia={props.familia}/>
            <Filho  {...props} nome="Gabriel" /> {/* ...props puxa todos os atributos, mas com uma desvantagens de sobrescrever o que já existe */}
        </div>
    )
}