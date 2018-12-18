import styled from 'styled-components';

export default styled.div`
  background: ${props => props.theme.colors.greyDarker};
  width: 150px;
  height: 150px;
  border-top: solid 0px ${props => props.theme.colors.primary};
  border-right: solid 5px ${props => props.theme.colors.primary};
  border-bottom: solid 5px ${props => props.theme.colors.primary};
  border-radius: 200px;
  box-shadow: 0 0 50px ${props => props.theme.colors.primary};

  img {
    margin-top: 20%;
    height: 60%;
  }
`;

/*export default styled.div`
  position: relative;
  margin: 64px 30px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 0 64px rgba(255, 255, 255, 0.5);
  text-align: center;

  img {
    margin-top: 20%;
    height: 60%;
  }

  span {
    top: -110px;
    position: absolute;
    text-transform: capitalize;
    opacity: 0.5;
  }

  &:before {
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: inset 0 0 64px rgba(255, 255, 255, 0.25);
    top: -20px;
    left: -20px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 100%;
    border: 2px solid rgba(219, 174, 71, 0.85);
    box-shadow: inset 0 0 64px 16px rgba(219, 174, 71, 0.25),
      0px 0px 64px 24px rgba(219, 174, 71, 0.75);
    top: -31px;
    left: -31px;
  }
`;*/
