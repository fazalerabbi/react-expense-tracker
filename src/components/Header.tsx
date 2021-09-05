import { FC, useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

export const Header: FC = () => {
    const { expenseState } = useContext(GlobalContext);
    return (
        <h2>
            Expense Tracker <br />by <br />{ expenseState.name }
        </h2>
    )
}
