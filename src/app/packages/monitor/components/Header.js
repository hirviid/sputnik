import styled from 'styled-components';

export default styled.header`
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;

  &:after {
    content: ' ';
    width: 100%;
    height: 2px;
    background: ${props =>
      `linear-gradient(to right, ${props.theme.colors.secondary} 0%, ${
        props.theme.colors.primary
      } 100%)`};
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
