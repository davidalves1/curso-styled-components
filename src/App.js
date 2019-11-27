import React from 'react';
import { ThemeProvider } from 'styled-components';

import LightTheme from './themes/light';
import DarkTheme from './themes/dark';
import Home from './components/containers/Home';
import Button from './components/common/Button';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Home>
        <h1>Testing themes</h1>
        <Button primary>
          Hello Styled!
        </Button>
      </Home>
    </ThemeProvider>
  );
}

export default App;
