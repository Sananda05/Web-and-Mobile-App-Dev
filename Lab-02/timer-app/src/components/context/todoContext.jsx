import React from "react";
import { useState } from "react";

export const todoContext = React.createContext()

export function ContextProvider(props) {
    const [works, setWork] = useState([
        {
            id:1,
            title:'Walking',
            project:'Fitness',
        },
        {
            id:2,
            title:'Gardening',
            project:'Hobby',
        }
    ])
  return (
    <todoContext.Provider value={[works,setWork]}>
        {props.children}
    </todoContext.Provider>
  );
}

// const contextConsumer = todoContext.Consumer