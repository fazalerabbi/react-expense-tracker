import { FC, useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

export const AccountSummary: FC = () => {
    const { expenseState } = useContext(GlobalContext)
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    { expenseState.income }
                </p>
            </div>
            <div>
                <h4>Expense</h4> 
                <p className="money minus">
                    { expenseState.expense }
                </p>
            </div>
            
        </div>
    )
}
