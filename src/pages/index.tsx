import { useState } from 'react';

import { DefaultLayout } from '../common/layouts/Default';

import Layout from '../common/components/layout/Layout';
import Button from '../common/components/Button';
import Modal from '../common/components/Modal';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleModal = () => setOpen(!isOpen);
  return (
    <DefaultLayout title={'Index'}>
      <Layout.Container center>
        <div className={'pt-12 md:pt-20 text-center'}>
          <h1 className={'font-bold text-white text-3xl md:text-5xl mb-8'}>
            React, Next.js & TailwindCSS
          </h1>
          <h2 className={'text-lg text-on-naked-50'}>
            Don't waste time structuring or setting up interfaces on your next
            project!
          </h2>
        </div>
        <Button.Group className="flex mt-12 space-y-5 sm:space-y-0 sm:space-x-5">
          <Button.Primary
            title={`Open modal`}
            size="xl"
            className="!px-6"
            onClick={() => toggleModal()}
          />
        </Button.Group>
      </Layout.Container>
      <AnimatePresence>
        {isOpen && (
          <Modal.Default open={isOpen} onClose={() => toggleModal()}>
            <Modal.Title onClose={() => toggleModal()}>Title</Modal.Title>
            <Modal.Body>
              <h1 className="text-[17px] font-semibold text-on-naked-100">
                Did you know that..?
              </h1>
              {[...Array(30)].map(() => (
                <h3 className="mt-1 text-base text-on-naked-800">
                  There is a technical name for the "fear of long words."
                </h3>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <h4 className="text-sm text-center xs:text-left">
                This is my cute little footer!
              </h4>
              <div
                className="flex items-center justify-center px-5 py-3 mt-4 mb-5 font-semibold text-white rounded-full xs:hidden bg-types-200"
                onClick={() => toggleModal()}
              >
                Close
              </div>
            </Modal.Footer>
          </Modal.Default>
        )}
      </AnimatePresence>
    </DefaultLayout>
  );
}
