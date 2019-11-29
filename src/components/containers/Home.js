import styled from 'styled-components';

export default styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.fontColor};
  transition: ease .3s;
`;
