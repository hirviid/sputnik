import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class List extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Link to="/">Back</Link>
        </Header>
      </div>
    );
  }
}

export default List;
