import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from 'reactstrap';

import LightTheme from './themes/light';
import DarkTheme from './themes/dark';
import Home from './components/containers/Home';
import PrimaryButton from './components/common/PrimaryButton';
import PasswordInput from './components/common/PasswordInput';
import { createGlobalStyle } from 'styled-components';
import Spinner from './components/common/Spinner';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.id === 'light' ? 'Times New Roman' : 'Helvetica'} !important;
  }
`;

function App() {
  const [theme, setTheme] = useState(DarkTheme);
  const [showPasword, setShowPassword] = useState(false);
  const [spinnerInverse, setSpinnerInverse] = useState(false);

  function handleToggleLights() {
    const newTheme = theme.id === 'light' ? DarkTheme : LightTheme;
    const spinerSide = !spinnerInverse;

    setTheme(newTheme);
    setSpinnerInverse(spinerSide);
  }

  function handleTogglePasswordVisibility() {
    const passwordVisbility = !showPasword;

    setShowPassword(passwordVisbility);
  }

  return (
    <ThemeProvider theme={theme}>
      <Home>
        <h1>Testing themes</h1>
        <Button color="primary" onClick={ () => handleToggleLights() }>
          Toggle Lights
        </Button>
        <PasswordInput show={showPasword} />
        <PrimaryButton onClick={ () => handleTogglePasswordVisibility() }>
          { showPasword ? 'Hide Password' : 'Show Password' }
        </PrimaryButton>
        <Spinner inverse={ spinnerInverse } />
      </Home>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
