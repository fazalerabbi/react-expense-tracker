import {IReducerProps} from "../interfaces/IReducerProps"
import {ETransactionType, ITransaction} from "../interfaces/ITransaction"
import {IState} from "../interfaces/IState"

const calculateExpenseAndIncome = (transactions: Array<ITransaction>) => {
    let expense = 0;
    let income = 0;
    for (let transaction of  transactions) {
        if (transaction.type === ETransactionType.CR) {
            income = income + transaction.value
        } else if (transaction.type === ETransactionType.DR) {
            expense = expense + transaction.value
        }
    }

    return { income, expense }
}

const addTransaction = (state: IState, action: IReducerProps) => {
    const newState: IState = {
        ...state,
        transactions: [...state.transactions, action.payload]
    }
    const { income, expense } = calculateExpenseAndIncome(newState.transactions)
    return {
        ...newState,
        expense,
        income
    }
}

const deleteTransaction = (state: IState, action: IReducerProps) => {
    const newState: IState = {
        ...state,
        transactions: state.transactions.filter((transaction: ITransaction) => transaction.id !== action.payload)
    }
    let { income, expense } = calculateExpenseAndIncome(newState.transactions)
    return {
        ...newState,
        expense,
        income
    }
}

export const AppReducer = (state: IState, action: IReducerProps): IState => {

    switch(action.type) {
        case 'ADD_TRANSACTION':
            return addTransaction(state, action) as IState
        case 'DELETE_TRANSACTION':
            return deleteTransaction(state, action) as IState
        default: 
            return state
    }
}