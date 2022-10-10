import React, { useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css';
import Header from './components/Header';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { MetaMaskWalletProvider } from './context/MetaMaskWalletContext';
import { PhantomWalletProvider } from './context/PhantomWalletContext';

const Context = ({ children }) => {
  const endpoint = 'https://localhost:8899';
  const getLibrary = (provider) => {
    return new Web3(provider);
  };
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <Web3ReactProvider getLibrary={getLibrary}>
          <MetaMaskWalletProvider>
            <PhantomWalletProvider>
              <WalletModalProvider>{children}</WalletModalProvider>
            </PhantomWalletProvider>
          </MetaMaskWalletProvider>
        </Web3ReactProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const App = () => {
  return (
    <>
      <Context>
        <Header />
      </Context>
    </>
  );
};

export default App;
