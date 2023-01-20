import { useContext } from "react"
import { myContext } from "../context"
import { v4 } from "uuid";
import "./Insert.css";

export default function Insert() {
  const {Insertion,SetInsertion,Taches,SetTaches} = useContext(myContext);
  const Add = ()=>{
    SetTaches([{"Id":v4(),"Nom":Insertion,"Done":false},...Taches]);
    SetInsertion("");
  }
  return (
    <>
        <input type={"text"} className="Insert" onChange={(e)=>SetInsertion(e.target.value)} value={Insertion}/>
        <input type={"button"} className="ADD" value={"+"} onClick={Add}/>
    </>
  )
}
