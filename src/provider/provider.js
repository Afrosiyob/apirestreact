import { useState } from "react"
import { Provider } from "react-redux"
import { TodosContex } from "../context/context"
import { store } from "../redux/service/store"


export const TodosProvider = ( { children } ) => {
    const [ todos, setTodos ] = useState( "wfwef" )
    return (
        <TodosContex.Provider value={ {
            todos,
            setTodos
        } }>
            { children }
        </TodosContex.Provider>
    )
}

export const ReduxProvider = ( { children } ) => {
    return <Provider store={ store }>
        { children }
    </Provider>
}