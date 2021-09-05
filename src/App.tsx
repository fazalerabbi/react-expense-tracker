import { FC } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from "./context/GlobalProvider";



export const App: FC = () => {
  return (
    <div className="container">
      <GlobalProvider>
        <Header />
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
