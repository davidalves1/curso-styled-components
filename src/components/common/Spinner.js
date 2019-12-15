import styled, { keyframes } from 'styled-components';

const rotateRight = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotateLeft = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
`;

const Spinner = styled.div`
  margin-top: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid green;
  border-top-color: transparent;

  animation: ${props => props.inverse ? rotateLeft : rotateRight} 1s linear infinite;
`;


export default Spinner;
