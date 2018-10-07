import * as React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import Flex from '../../../components/Flex';
import Layout from '../components/Layout';
import AppTitle from '../components/AppTitle';
import Configuration from './Configuration';

const Configurations = ({ configurations }) => (
  <Layout>
    <Flex flex={1}>
      <AppTitle>Sputnik</AppTitle>
    </Flex>
    <Flex flex={3} start>
      {map(configurations, (configuration, key) => (
        <Configuration key={key} configuration={configuration} />
      ))}
    </Flex>
  </Layout>
);

const mapStateToProps = state => ({
  configurations: state.ci.configurations,
});

export default connect(mapStateToProps)(Configurations);
