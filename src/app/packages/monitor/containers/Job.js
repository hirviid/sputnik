import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../shared/actions';
import * as selectors from '../../../../shared/selectors';

class Job extends React.Component {
  componentDidMount() {
    this.props.dispatchRequestJob(this.props.configId, this.props.name);
  }

  render() {
    const { name } = this.props;

    return <React.Fragment>{name}</React.Fragment>;
  }
}

const mapStateToProps = (state, props) => ({
  // jobs: selectors.getJob(state, props.configId, props.name),
});

const mapDispatchToProps = {
  dispatchRequestJob: actions.requestJob,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Job);
