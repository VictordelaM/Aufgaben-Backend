import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [toDos, setTodos] = useState([])
    const [done, setDone] = useState([])
    function App() {

        useEffect(()=>{
            fetch('http://localhost:3010/todos').then((response)=> response.json())
            .then((toDos) => {
            setTodos(toDos);
        })
        },[])
    }
        App()
    return (
        <>
            <mainContext.Provider
                value={{toDos, setTodos}}
            >
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider
