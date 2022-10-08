import React from 'react';
import { Icon } from '@iconify/react';
import PhantomLogo from '../assets/phantom.png';

const Wallets = () => {
  const wallets = [
    {
      name: 'Phantom',
      icon: <img src={PhantomLogo} alt='phantom logo' className='w-[30px]' />,
    },
    {
      name: 'Metamask',
      icon: <Icon icon='logos:metamask-icon' className='text-2xl' />,
    },
  ];
  return (
    <>
      <div className='mt-8'>
        {wallets.map((wallet) => (
          <div
            key={wallet.name}
            className='flex items-center justify-between mb-5 px-4'
          >
            <div className='flex'>
              <span className='mr-3'>{wallet.icon}</span>
              <p> {wallet.name}</p>
            </div>

            <button className='bg-[#8b5cf6] text-white py-3 px-5 rounded-xl'>
              Connect
            </button>
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
