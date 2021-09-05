import { createContext } from "react"
import { IState } from "../interfaces/IState"
import { IExpenseContextProps } from "../interfaces/IExpenseContextProps";


export const initialState: IState = {
    name: 'Fazal E Rabbi',
    transactions: [
    ],
    income: 0,
    expense: 0
}

const initialContext: IExpenseContextProps = {expenseState: initialState, expenseDispatch: () => {}}
const GlobalContext = createContext<IExpenseContextProps>(initialContext)
export default GlobalContext