import React, { useState } from 'react';
import { Icon } from '@iconify/react';
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Navbar = ({ onOpen }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navList = [
    { name: 'About', link: '#intro' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#blog' },
  ];
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
        {navList.map((nav) => (
          <li
            key={nav.name}
            className='lg:mr-6 mt-6 lg:mt-0 text-white font-medium'
          >
            <a href={nav.link}>{nav.name}</a>
          </li>
        ))}
        {/* <WalletMultiButton  /> */}
        <button
          type='button'
          className=' my-6 lg:my-0 bg-white text-primary-200 font-semibold py-2 px-6  items-center rounded-lg flex justify-center'
          onClick={onOpen}
        >
          <Icon icon='akar-icons:link-chain' className='mr-3' /> Connect
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
