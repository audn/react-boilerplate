import React, { useState } from 'react';
import Link from 'next/link';

import MenuToggle from './components/MenuToggle';
import MenuItems from './components/MenuItems';
import Container from '../Container';
import Modal from '../Modal';
import Button from '../Button';

export const Header = () => {
  const [isPhoneMenuOpen, setPhoneMenu] = useState(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleMenu = () => setPhoneMenu(!isPhoneMenuOpen);
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <header className="z-50 sticky top-0 bg-header-100 text-on-header-800 border-b-2 border-header-150 py-4">
      <Container>
        <div className="sm:flex sm:flex-no-wrap items-center justify-between ">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="font-bold text-white text-xl">MyApp</a>
            </Link>
            <MenuToggle
              toggleMenu={toggleMenu}
              isPhoneMenuOpen={isPhoneMenuOpen}
            />
          </div>
          <MenuItems
            isPhoneMenuOpen={isPhoneMenuOpen}
            toggleModal={toggleModal}
          />
        </div>
      </Container>
      <Modal.Body
        open={isModalOpen}
        onClose={toggleModal}
        className={'max-w-96'}
      >
        <Modal.Content
          icon={<i className={'fas fa-hand-sparkles'} />}
          title={'Are you sure?'}
          description={
            <h4 className={`text-on-modal-900`}>
              This is an inreversible action, be careful!
            </h4>
          }
        />
        <Button.Group className={'w-full mt-10 space-y-5 px-4'}>
          <Button.Primary
            title={'Do it'}
            className={'!w-full !justify-center !flex'}
          />
          <Button.Secondary
            onClick={toggleModal}
            title={'Cancel'}
            className={'!w-full !justify-center !flex'}
          />
        </Button.Group>
      </Modal.Body>
    </header>
  );
};
