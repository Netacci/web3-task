import React from 'react';
import { Icon } from '@iconify/react';
import PhantomLogo from '../assets/phantom.png';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

const Wallets = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      await deactivate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  const walletsList = [
    {
      name: 'Phantom',
      icon: <img src={PhantomLogo} alt='phantom logo' className='w-[30px]' />,
      button: <WalletMultiButton />,
    },
    {
      name: 'Metamask',
      icon: <Icon icon='logos:metamask-icon' className='text-2xl' />,
      button: (
        <button
          className='bg-[#8b5cf6] text-white py-3 px-5 rounded-xl'
          onClick={active ? disconnect : connect}
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
