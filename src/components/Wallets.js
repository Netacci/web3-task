import React, { useContext, useState } from 'react';
import { Icon } from '@iconify/react';
import PhantomLogo from '../assets/phantom.png';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useConnection } from '@solana/wallet-adapter-react';
import { MetaMaskWalletContext } from '../context/MetaMaskWalletContext';
import { PhantomWalletContext } from '../context/PhantomWalletContext';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

const Wallets = ({ onClose }) => {
  const { active, activate } = useContext(MetaMaskWalletContext);

  const { connection } = useConnection();
  console.log('connect', connection);

  const wallet = useContext(PhantomWalletContext);
  console.log('wallet >>', wallet);

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  const handleMetamaskRedirect = () => {
    connect();
  };
  if (active || wallet.connected) {
    onClose();
  }
  const walletsList = [
    {
      name: 'Phantom',
      icon: <img src={PhantomLogo} alt='phantom logo' className='w-[30px]' />,
      button: active ? (
        <WalletMultiButton
          disabled
          className={`${
            active ? '!cursor-not-allowed' : 'wallet-adapter-button'
          }  `}
        >
          Connect
        </WalletMultiButton>
      ) : (
        <WalletMultiButton>Connect</WalletMultiButton>
      ),
    },
    {
      name: 'Metamask',
      icon: <Icon icon='logos:metamask-icon' className='text-2xl' />,
      button: wallet.connected ? (
        <button
          disabled
          className='cursor-not-allowed bg-[#8b5cf6] text-white py-3 px-5 rounded-xl'
        >
          Connect
        </button>
      ) : (
        <button
          className='bg-[#8b5cf6] text-white py-3 px-5 rounded-xl'
          onClick={handleMetamaskRedirect}
        >
          {active ? 'Disconnect ' : 'Connect'}
        </button>
      ),
    },
  ];

  return (
    <>
      <div className='mt-8'>
        {walletsList.map((wallet) => (
          <div
            key={wallet.name}
            className='flex items-center justify-between mb-5 px-4'
          >
            <div className='flex'>
              <span className='mr-3'>{wallet.icon}</span>
              <p> {wallet.name}</p>
            </div>
            <div> {wallet.button}</div>
          </div>
        ))}
        <p className='flex justify-end items-center'>
          More options <Icon icon='eva:arrow-down-fill' />
        </p>
      </div>
    </>
  );
};

export default Wallets;
