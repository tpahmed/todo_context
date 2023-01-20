import "./Tache.css";

export default function Tache(props) {
  
  return (
    <li>
        <input type="text" className={"NOM"} id={props.isDone ? "isDone" : ""} value={props.nom} readOnly/>
        <input type={"button"} value="✗" className="DEL" onClick={props.del}/>
        <input type={"button"} value="✓" className="DONE" onClick={props.done}/>
    </li>
  )
}
