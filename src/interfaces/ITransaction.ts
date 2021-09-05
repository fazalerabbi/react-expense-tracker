export enum ETransactionType {
    CR = 'CR',
    DR = 'DR'
}

export interface ITransaction {
    id: number,
    description: string,
    value: number,
    type: ETransactionType
}