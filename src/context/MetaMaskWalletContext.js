import React, { createContext } from 'react';
import { useWeb3React } from '@web3-react/core';

export const MetaMaskWalletContext = createContext();

export const MetaMaskWalletProvider = ({ children }) => {
  const { active, activate, deactivate, account } = useWeb3React();

  return (
    <MetaMaskWalletContext.Provider
      value={{ active, activate, deactivate, account }}
    >
      {children}
    </MetaMaskWalletContext.Provider>
  );
};

export default MetaMaskWalletProvider;
