import { PureComponent, useState } from "react"
import "./App.css"
import SimpleComponent from "./Component/SimpleComponent"
import Concept from "./Concepts/Concept"
import Pure_Component from "./Component/Pure_Component"

const App = () => {
  const [show,setShow] = useState(true)
  return (
    <div>
      <button onClick={()=>{
        setShow(!show)
      }}>{show?"Simple Component":"Pure Component"}</button>
      <div>
        {show?<SimpleComponent/>:<Pure_Component/>}
      </div>
    </div>
  )
}

export default App