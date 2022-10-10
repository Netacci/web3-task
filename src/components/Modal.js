import React from 'react';
import { Icon } from '@iconify/react';
import Wallets from './Wallets';

const Modal = ({ onClose, open }) => {
  return (
    <>
      {open ? (
        <div className='bg-[rgba(0,0,0,0.5)] top-0 left-0 w-full h-screen absolute'>
          <div className=' right-0 left-0 z-50 lg:w-4/12 absolute bg-white p-4 top-20 h-full mx-auto'>
            <div className=' py-4 flex px-6 justify-end'>
              <Icon
                icon='ci:close-big'
                className=' text-2xl font-semibold cursor-pointer'
                onClick={onClose}
              />
            </div>

            <h3 className='text-center text-2xl font-semibold'>
              Choose Wallet to continue
            </h3>
            <Wallets onClose={onClose} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
