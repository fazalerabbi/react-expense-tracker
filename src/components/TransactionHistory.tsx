import { FC, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { ITransaction } from '../interfaces/ITransaction'
import { Transaction } from './Transaction'

export const TransactionHistory: FC = () => {
    const { expenseState } = useContext(GlobalContext)
    return (
        <div>
            <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {expenseState.transactions.map((transaction: ITransaction) =>
                        (
                            <Transaction {...transaction} key={transaction.id}/>
                        )
                )}
            </ul>
        </div>
        </div>
    )

}