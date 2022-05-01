import React from 'react';
import {ThemeContext} from '../ThemeContext';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <div>
        <div style={{backgroundColor: theme.background, color: theme.color}}>
          <h1>Test text!!!!</h1>
        </div>
        <button {...props}/>
      </div>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;