import {FC, useContext} from 'react'
import { ETransactionType, ITransaction } from '../interfaces/ITransaction'
import GlobalContext from "../context/GlobalContext";

export const Transaction: FC<ITransaction> = ( transaction: ITransaction) => {
    const { expenseDispatch } = useContext(GlobalContext)
    const className = (transaction.type === ETransactionType.CR) ? 'plus' : 'minus'
    const deleteTransaction = (id: number) => {
        expenseDispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    return (
        <li className={className}>
            {transaction.description}
            <span>{Math.abs(transaction.value)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
                X
            </button>
        </li>
    )

} 