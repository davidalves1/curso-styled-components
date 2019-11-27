import React from 'react';

import Button from './components/common/Button';

function App() {
  return (
    <div style={{
      margin: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button primary>
        Hello Styled!
      </Button>
    </div>
  );
}

export default App;
