import * as React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../../../shared/selectors';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Job from './Job';
class List extends React.Component {
  render() {
    const { configuration } = this.props;

    return (
      <React.Fragment>
        <Header>
          <Link to="/">Back</Link>
          {configuration.configuration.url}
        </Header>
        <main>
          {configuration.jobs.map(job => (
            <Job name={job.name} key={job.name} configId={configuration.id} />
          ))}
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  configuration: selectors.getConfiguration(state, props.match.params.id),
});

export default connect(mapStateToProps)(List);
