import React from 'react';

import Modal from '../../Modal';
import Button from '../../Button';

function TestModal({ open, toggle }: { open: boolean; toggle: () => void }) {
  return (
    <Modal.Body open={open} onClose={toggle} className={'max-w-96'}>
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
          onClick={toggle}
          title={'Cancel'}
          className={'!w-full !justify-center !flex'}
        />
      </Button.Group>
    </Modal.Body>
  );
}

export default TestModal;
