import styled, { css } from 'styled-components';

const Button = styled.button`
  margin: 1rem auto
  border-radius: 5px;
  padding: 10px;
  background: #efefef;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  transition: ease .3s;
  border: 1px solid #bcbcbc;
  &:hover {
    background: #bcbcbc;
  }

  ${props => props.primary && css`
    color: #fff;
    border: 1px solid #1976d2;
    background: #2196f3;
    &:hover {
      background: #1976d2;
    }
  `}

  ${props => props.danger && css`
    color: #fff;
    border: 1px solid #d32f2f;
    background: #f44336;
    &:hover {
      background: #d32f2f;
    }
  `}
`;

export default Button;
