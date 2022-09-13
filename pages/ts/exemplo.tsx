import Pessoa from "../../components/Pessoa";

export default function exemploTS(){
    return(
        <div>
            <Pessoa nome="Israel" idade={16} />
            <Pessoa nome="Maria"   />
        </div>
    )
}