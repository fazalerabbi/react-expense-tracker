import { ITransaction } from "./ITransaction";

export interface IState {
    name: string,
    transactions: Array<ITransaction>,
    income: number,
    expense: number
}