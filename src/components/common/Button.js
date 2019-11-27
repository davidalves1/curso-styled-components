import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 10px;
  background: #efefef;
  border: 1px solid #333;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: ease .3s;

  ${props => props.primary && css`
    background: #2196f3;
    &:hover {
      background: #1976d2;
    }
    `}

    ${props => props.danger && css`
    background: #f44336;
    &:hover {
      background: #d32f2f;
    }
  `}
`;

export default Button;
