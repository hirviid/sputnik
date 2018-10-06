import * as React from 'react';
import { connect } from 'react-redux';
import { requestInfo } from '../../../../shared/actions';
import Card from '../components/Card';

class Configuration extends React.Component {
  componentDidMount() {
    this.props.requestInfo({
      url: 'https://build.zinderlabs.com',
      username: localStorage.getItem('sptnk:srnm'),
      password: localStorage.getItem('sptnk:psswrd'),
    });
  }

  render() {
    return <Card>configs</Card>;
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  requestInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configuration);
