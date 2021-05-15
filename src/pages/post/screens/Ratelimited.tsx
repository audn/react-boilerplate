import React from 'react';
import { Layout } from '../../../common/layouts/Layout';
import Container from '../../../common/components/Container';
import Alert from '../../../common/components/Alert';

function Ratelimited() {
  return (
    <Layout title={'Loading post'}>
      <Container alignContent={'left'}>
        <div className={'py-12'}>
          <Alert.Ratelimited />
        </div>
      </Container>
    </Layout>
  );
}

export default Ratelimited;
