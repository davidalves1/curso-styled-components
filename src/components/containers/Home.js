import styled from 'styled-components';

export default styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  height: 100vh;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.fontColor};
  transition: ease .3s;
`;
