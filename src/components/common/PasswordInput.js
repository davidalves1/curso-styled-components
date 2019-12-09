import React from 'react';
import styled from 'styled-components';

const PasswordInput = styled.input.attrs({
  type: 'password'
})`
  margin: 1rem auto;
  padding: .5rem 0;
  text-align: center;
  font-size: 18px;
`;

export default PasswordInput;
