import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import LightTheme from './themes/light';
import DarkTheme from './themes/dark';
import Home from './components/containers/Home';
import Button from './components/common/Button';
import PasswordInput from './components/common/PasswordInput';

function App() {
  const [theme, setTheme] = useState(DarkTheme);
  const [showPasword, setShowPassword] = useState(false);

  function handleToggleLights() {
    const newTheme = theme.id === 'light' ? DarkTheme : LightTheme;

    setTheme(newTheme);
  }

  function handleTogglePasswordVisibility() {
    const passwordVisbility = !showPasword;

    setShowPassword(passwordVisbility);
  }

  return (
    <ThemeProvider theme={theme}>
      <Home>
        <h1>Testing themes</h1>
        <Button primary onClick={ () => handleToggleLights() }>
          Toggle Lights
        </Button>
        <PasswordInput show={showPasword} />
        <Button onClick={ () => handleTogglePasswordVisibility() }>
          { showPasword ? 'Hide Password' : 'Show Password' }
        </Button>
      </Home>
    </ThemeProvider>
  );
}

export default App;
