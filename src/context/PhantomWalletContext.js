import React, { createContext } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

export const PhantomWalletContext = createContext();

export const PhantomWalletProvider = ({ children }) => {
  const wallet = useWallet();

  return (
    <PhantomWalletContext.Provider value={wallet}>
      {children}
    </PhantomWalletContext.Provider>
  );
};

export default PhantomWalletProvider;
