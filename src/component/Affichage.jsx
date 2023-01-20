import { useContext } from "react"
import { myContext } from "../context"
import Tache from './Tache';
import "./Affichage.css";

export default function Affichage() {
    const {Taches,SetTaches} = useContext(myContext);
    const done = (id)=>{
        SetTaches(Taches.map((e)=>{
            if (e.Id === id){
                e.Done = !e.Done;
            }
            return e;
        }))
    }
    const DEL = (id)=>{
        SetTaches(Taches.filter((e)=>{
            return e.Id !== id
        }))
    }
    return (
        <ul>{Taches.map((e)=><Tache key={e.Id} nom={e.Nom} del={()=>DEL(e.Id)} isDone={e.Done} done={()=>done(e.Id)}/>)}</ul>
    )
}
