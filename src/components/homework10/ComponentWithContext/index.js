import React from 'react';
import {ThemeContext, themes} from '../ThemeContext';
import ThemedButton from "../themedButton";

function ThemeParent(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class ComponentWithContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeParent changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default ComponentWithContext;