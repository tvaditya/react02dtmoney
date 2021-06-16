import {createContext, ReactNode, useEffect, useState} from "react";
import {api} from "./services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     value: number;
//     category: string;
//     type: string;
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> // pick does the opposite

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions,setTransactions] = useState<Transaction[]>([]);

    useEffect(()=> {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transaction: TransactionInput) {
        // const data = {
        //     title,
        //     value,
        //     category,
        //     type
        // };

        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{ transactions , createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}