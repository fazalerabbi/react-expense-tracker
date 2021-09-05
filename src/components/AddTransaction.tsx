import {ChangeEvent, FC, useContext, useState} from 'react';
import {ETransactionType, ITransaction} from '../interfaces/ITransaction';
import GlobalContext from "../context/GlobalContext";

export const AddTransaction: FC = () => {

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState(ETransactionType.CR);
    const {expenseDispatch} = useContext(GlobalContext)

    const onSubmit = (e: any) => {
        e.preventDefault()
        const newTransaction: ITransaction = {
            id: new Date().getTime(),
            description,
            value: amount,
            type: type
        }
        expenseDispatch({
            type: 'ADD_TRANSACTION',
            payload: newTransaction
        })
        e.target.reset()
    }

    const onTransactionTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const myType = e.target.value as keyof typeof ETransactionType
        setType(ETransactionType[myType])
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text" 
                            id="description"
                            placeholder="Details of Transaction"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Transaction Amount
                    </label>
                    <input  type="number"
                            id="amount"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="type">
                        Transaction Type
                    </label>
                    <br />
                    Income: <input id="type" defaultChecked
                        value={ETransactionType.CR}
                        name="type"
                        type="radio"
                        onChange={onTransactionTypeChange}
                    />
                    Expense: <input id="type"
                        value={ETransactionType.DR}
                        name="type"
                        type="radio"
                        onChange={onTransactionTypeChange}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}