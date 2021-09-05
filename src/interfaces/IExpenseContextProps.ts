import { Dispatch } from "react";
import { IState } from "./IState";

export interface IExpenseContextProps{
    expenseState: IState;
    expenseDispatch: Dispatch<any>
}