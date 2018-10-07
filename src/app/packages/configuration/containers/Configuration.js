import * as React from 'react';
import { connect } from 'react-redux';
import { requestInfo } from '../../../../shared/actions';
import Flex from '../../../components/Flex';
import Card from '../components/Card';
import Logo from '../components/Logo';

class Configuration extends React.Component {
  componentDidMount() {
    // this.props.requestInfo({
    //   url: '',
    //   username: localStorage.getItem('sptnk:srnm'),
    //   password: localStorage.getItem('sptnk:psswrd'),
    // });
  }

  render() {
    const { configuration } = this.props;

    return (
      <Card>
        <Flex flex={2}>
          <Logo>
            {/* <span>{configuration.ciType}</span> */}
            <img src={`/images/${configuration.ciType}.svg`} alt="logo" />
          </Logo>
        </Flex>
        <Flex flex={1}>
          {configuration.configuration.username}
          &nbsp;@&nbsp;
          <a href="{configuration.configuration.url}" target="_blank">
            {configuration.configuration.url}
          </a>
        </Flex>
      </Card>
    );
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
