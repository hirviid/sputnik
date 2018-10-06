import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: ${props => (props.start ? 'start' : 'center')};
  justify-content: center;
  flex: ${props => props.flex || 1};
  width: 100%;
`;
