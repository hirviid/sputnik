import * as React from 'react';
import Flex from '../../../components/Flex';
import Layout from '../components/Layout';
import AppTitle from '../components/AppTitle';
import Configuration from './Configuration';

const Configurations = () => (
  <Layout>
    <Flex flex={1}>
      <AppTitle>Sputnik</AppTitle>
    </Flex>
    <Flex flex={3} start>
      <Configuration />
    </Flex>
  </Layout>
);

export default Configurations;
