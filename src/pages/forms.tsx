import React, { SyntheticEvent, useState } from 'react';

import { Layout } from '../common/layouts/Layout';
import Container from '../common/components/Container';

import { fadeIn } from '../common/utils/data/animations';
import { AnimatePresence, motion } from 'framer-motion';

import Form from '../common/components/Form';
import Banner from '../common/components/Banner';
import Button from '../common/components/Button';

import { validateEmail } from '../common/utils/helpers/regex/email';
import { IFormErrors } from '../common/lib/types';

const Forms = () => {
  const [showForm, setShowForm] = useState<boolean>(true);
  const [isOpenBanner, setBanner] = useState<boolean>(true);

  const [getFirstName, setFirstName] = useState<string>('');
  const [getEmail, setEmail] = useState<string>('');
  const [getMessage, setMessage] = useState<string>('');

  const [error, setError] = useState<IFormErrors>({
    firstName: false,
    email: false,
    message: false,
  });

  function anyErrors() {
    let errors = false;

    Object.keys(error).forEach((field) => {
      if (error[field]) {
        errors = true;
      }
    });

    return errors;
  }
  function canUserSubmit() {
    if (!anyErrors()) {
      return !!(getEmail.length && getFirstName.length && getMessage.length);
    } else {
      return false;
    }
  }
  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    console.log('Sent!');
    setShowForm(!showForm);
  }

  return (
    <Layout
      title={showForm ? 'Give feedback!' : 'Thank you!' + ` | Boilerplate`}
    >
      <div className={'py-12'}>
        <Container>
          <AnimatePresence>
            {isOpenBanner && (
              <Banner
                type={'brand'}
                onClose={() => setBanner(!isOpenBanner)}
                icon={<i className={'fas fa-exclamation-triangle'} />}
                leftContent={
                  <div>
                    <strong>This is not an actual form!</strong> Just for
                    demonstration purposes.
                  </div>
                }
              />
            )}
          </AnimatePresence>
          <motion.div
            className="w-full"
            initial="initial"
            animate="enter"
            variants={fadeIn}
          >
            <h1 className={'font-bold text-white text-3xl mb-6'}>
              Your feedback is important!
            </h1>
            <AnimatePresence initial={false}>
              <Form.Layout
                hasSubmitted={!showForm}
                onSubmit={(event) => handleSubmit(event)}
              >
                <Form.Group className={'sm:flex space-y-10 sm:space-y-0'}>
                  <Form.Input
                    title={'First name'}
                    value={getFirstName}
                    error={error.firstName}
                    placeholder={'Your first name'}
                    colorScheme={'naked'}
                    onChange={(event) => handleFirstNameChange(event)}
                  />
                  <Form.Input
                    title={'Email'}
                    value={getEmail}
                    error={error.email}
                    type={'email'}
                    placeholder={'hey@audun.gg'}
                    colorScheme={'naked'}
                    onChange={(event) => handleEmailChange(event)}
                  />
                </Form.Group>
                <Form.TextArea
                  title={'Email'}
                  value={getMessage}
                  required={false}
                  error={error.message}
                  placeholder={'Message'}
                  maxLength={55}
                  colorScheme={'naked'}
                  className={'mt-8'}
                  onChange={(event) => handleMessageChange(event)}
                />
                <Button.Group className="mt-12">
                  <Button.Primary
                    onClick={(event: SyntheticEvent) => handleSubmit(event)}
                    title={`Submit`}
                    route="/forms"
                    disabled={!canUserSubmit()}
                    icon={<i className={'fas fa-paper-plane mr-3'} />}
                  />
                </Button.Group>
              </Form.Layout>
            </AnimatePresence>
          </motion.div>
        </Container>
      </div>
    </Layout>
  );

  function handleFirstNameChange(e: SyntheticEvent) {
    let value: string;
    ({ value } = e.target as HTMLInputElement);

    setFirstName(value);

    if (!value.trim().length) {
      setError({
        ...error,
        firstName: false,
      });
    } else if (value.length < 2) {
      setError({
        ...error,
        firstName: 'Please enter 2 or more characters.',
      });
    } else {
      setError({
        ...error,
        firstName: false,
      });
    }
  }
  function handleEmailChange(e: SyntheticEvent) {
    let value: string;
    ({ value } = e.target as HTMLInputElement);

    setEmail(value);

    if (!value.trim().length) {
      setError({
        ...error,
        email: false,
      });
    } else if (!validateEmail(value)) {
      setError({
        ...error,
        email: 'Please enter a valid email!',
      });
    } else {
      setError({
        ...error,
        email: false,
      });
    }
  }
  function handleMessageChange(e: SyntheticEvent) {
    let value: string;
    ({ value } = e.target as HTMLInputElement);

    setMessage(value);

    if (!value.trim().length) {
      setError({
        ...error,
        message: false,
      });
    } else if (value.length < 2) {
      setError({
        ...error,
        message: 'Please enter 2 or more characters.',
      });
    } else {
      setError({
        ...error,
        message: false,
      });
    }
  }
};

export default Forms;
