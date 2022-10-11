/* eslint-disable no-self-compare */
import React, { useState, useContext } from 'react';
import { Icon } from '@iconify/react';
import { MetaMaskWalletContext } from '../context/MetaMaskWalletContext';
import { PhantomWalletContext } from '../context/PhantomWalletContext';
import { injected } from './Wallets';
import { WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';

const Navbar = ({ onOpen }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { account, active, deactivate } = useContext(MetaMaskWalletContext);
  const wallet = useContext(PhantomWalletContext);
  const [phantomWalletAddress, setPhantomWalletAddress] = useState(null);
  const checkIfWalletIsConnected = async () => {
    if (window?.solana?.isPhantom) {
      console.log('Phantom wallet found!');
      const response = await window.solana.connect({ onlyIfTrusted: true });
      console.log('Connected with Public Key:', response.publicKey.toString());
      /*
       * Set the user's publicKey in state to be used later!
       */
      setPhantomWalletAddress(response.publicKey.toString());
    } else {
      alert('Solana object not found! Get a Phantom Wallet 👻');
    }
  };
  checkIfWalletIsConnected();
  console.log(phantomWalletAddress);
  // const navList = [
  //   { name: 'About', link: '#about' },
  //   { name: 'Projects', link: '#projects' },
  //   { name: 'Contact', link: '#contact' },
  // ];
  async function disconnect() {
    try {
      await deactivate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  const handleConnection = () => {
    if (active) {
      disconnect();
    } else {
      onOpen();
    }
  };

  return (
    <nav className=' flex justify-between transition-all duration-500 ease-in rounded'>
      <div className='text-white font-bold text-3xl'>LOGO</div>
      <div
        className='block lg:hidden cursor-pointer'
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <Icon
          icon={isNavOpen ? 'ci:close-big' : 'charm:menu-hamburger'}
          className='text-white text-2xl font-semibold'
        />
      </div>
      <ul
        className={`lg:flex px-32 lg:px-0 lg:bg-inherit lg:static absolute items-center transition-all duration-500 ease-in  ${
          isNavOpen ? 'top-[5rem] bg-[#8b5cf6]' : '-top-[490px]'
        }`}
      >
        {/* {navList.map((nav) => (
          <li
            key={nav.name}
            className='lg:mr-6 mt-6 lg:mt-0 text-white font-medium'
          >
            <a href={nav.link}>{nav.name}</a>
          </li>
        ))} */}

        <h3 className='text-white font-semibold mr-4'>
          {active
            ? `Wallet address : ${account}`
            : wallet.connected
            ? `Wallet address: ${phantomWalletAddress}`
            : null}
        </h3>

        {wallet.connected ? (
          <WalletDisconnectButton>Disconnect</WalletDisconnectButton>
        ) : (
          <button
            type='button'
            className={`my-6 lg:my-0 bg-white text-primary-200 font-semibold py-2 px-6 items-center rounded-lg flex justify-center ${
              wallet.connected ? 'hidden' : 'block'
            }`}
            onClick={handleConnection}
          >
            {active || wallet.connected ? (
              'Disconnect'
            ) : (
              <span className='flex items-center'>
                {' '}
                <Icon icon='akar-icons:link-chain' className='mr-3' /> Connect
              </span>
            )}
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
