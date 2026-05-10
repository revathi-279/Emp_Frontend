import { createContext,useState } from "react"

//Create context provider object
export const counterContextObj = createContext()  //Pipeline designed but empty

 function ContextProvider({children}) {
    //state
    const [counter,setCounter] = useState(80)
    const [counter1,setCounter1] = useState(80)
    //Functions to change state
    const changeCounter = () => {
        setCounter(counter + 1)
    }
    const changeCounter1 = () => {
        setCounter(counter - 1)
    }
  return (
    <counterContextObj.Provider value = {{counter,counter1,changeCounter,changeCounter1}}> 
    {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider
