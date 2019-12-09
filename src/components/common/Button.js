import styled, { css } from 'styled-components';

const Button = styled.button`
  margin: 1rem auto
  border-radius: 5px;
  padding: 10px;
  background: #efefef;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: ease .3s;

  ${props => props.primary && css`
    border: 1px solid #1976d2;
    background: #2196f3;
    &:hover {
      background: #1976d2;
    }
  `}

  ${props => props.danger && css`
  border: 1px solid #d32f2f;
    background: #f44336;
    &:hover {
      background: #d32f2f;
    }
  `}
`;

export default Button;
