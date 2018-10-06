import * as React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  padding: 16px 0;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1em;
  width: 240px;
  background: ${props =>
    `linear-gradient(to right, ${props.theme.colors.secondary} 0%, ${
      props.theme.colors.primary
    } 100%)`};
  /* margin-bottom: 4em; */

  h1 {
    margin: 0;
    position: relative;
    font-weight: normal;
    padding-left: 20px;
  }
`;

const Mask = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.greyDarker};
  width: 236px;
  height: 56px;
  top: 2px;
  left: 2px;
  box-sizing: border-box;
`;

const AppTitle = ({ children }) => {
  return (
    <Background>
      <Mask />
      <h1>{children}</h1>
    </Background>
  );
};

export default AppTitle;
