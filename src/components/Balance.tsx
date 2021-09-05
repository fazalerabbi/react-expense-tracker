import { FC, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export const Balance: FC = () => {
    const { expenseState } = useContext(GlobalContext)
    let balance:number = expenseState.income - expenseState.expense;
    
    return (
        <div>
            <h4>Current Balance</h4>
            <h1 id="balance">{ balance }</h1>
        </div>
    )

}