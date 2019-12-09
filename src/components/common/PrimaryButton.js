import styled from 'styled-components';
import { Button } from 'reactstrap';

const PrimaryButton = styled(Button).attrs(props => ({
  color: 'primary'
}))`
  border: 2px solid red !important;
`;

export default PrimaryButton;
