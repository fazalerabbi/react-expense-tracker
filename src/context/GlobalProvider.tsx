import { useReducer } from "react";
import GlobalContext, { initialState } from './GlobalContext'
import IPropChildrenInterface from '../interfaces/IProp';
import { AppReducer } from "./AppReducer";
import { IExpenseContextProps } from "../interfaces/IExpenseContextProps";

export const GlobalProvider = (props: IPropChildrenInterface) => {
    const [expenseState, expenseDispatch] = useReducer(AppReducer, initialState)

    const expenseContextValues: IExpenseContextProps = {
        expenseState,
        expenseDispatch
    }
    return (
        <GlobalContext.Provider value={ expenseContextValues }>
            { props.children }
        </GlobalContext.Provider>
    )

}

