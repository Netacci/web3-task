import React, { useState } from 'react';

import Modal from './Modal';
import Navbar from './Navbar';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='lg:px-52 px-6 py-8 bg-[#8b5cf6] relative'>
      <Navbar onOpen={() => setIsModalOpen(true)} />
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpen={() => setIsModalOpen(true)}
      />
    </div>
  );
};

export default Header;
