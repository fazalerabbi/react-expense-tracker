import { FC } from 'react'
import { ETransactionType, ITransaction } from '../interfaces/ITransaction'

export const Transaction: FC<ITransaction> = ( transaction: ITransaction) => {

    const className = (transaction.type === ETransactionType.CR) ? 'plus' : 'minus'

    return (
        <li className={className}>
            {transaction.description}
            <span>{Math.abs(transaction.value)}</span>
            <button className="delete-btn">
                X
            </button>
        </li>
    )

} 