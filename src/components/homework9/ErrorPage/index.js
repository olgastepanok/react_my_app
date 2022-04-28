import React from 'react';
import {Link} from "react-router-dom";

class ErrorPage extends React.Component {
  render() {
    return <>
      <h1>404 Not Found</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>;
  }
}

export default ErrorPage;