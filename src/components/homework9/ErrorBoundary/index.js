import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("error = ", error);
    return { hasError: true };
  }

  render() {
    console.log("this.state.hasError", this.state.hasError);
    if (this.state.hasError) {
      return <h1>Something went wrong :(</h1>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;