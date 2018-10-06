import styled from 'styled-components';

export default styled.div`
  height: 50%;
  min-height: 400px;
  width: 75%;
  max-width: 600px;
  background-color: ${props => props.theme.colors.grey};
  box-shadow: 0 100px 200px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
