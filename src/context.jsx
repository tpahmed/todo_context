import { createContext, useState } from "react";
import {v4} from "uuid";

export const myContext = createContext();

export default function Mycontext({children}) {
    const [Insertion,SetInsertion] = useState("");
    let InitTaches = [
        {"Id":v4(),"Nom":"swim","Done":false},
        {"Id":v4(),"Nom":"play","Done":false},
        {"Id":v4(),"Nom":"learn","Done":false},
    ]
    const [Taches,SetTaches] = useState(InitTaches);
  
    return (
    <myContext.Provider value={{Insertion,SetInsertion,Taches,SetTaches}}>
        {children}
    </myContext.Provider>
  )
}
