import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 50vw;
  align-items: center;
  justify-content: center;
  background-color: steelblue;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  margin-left: 25vw;

  box-shadow: 13px 8px 80px 0px rgba(0,0,0,0.7);
  -webkit-box-shadow: 13px 8px 80px 0px rgba(0,0,0,0.7);
  -moz-box-shadow: 13px 8px 80px 0px rgba(0,0,0,0.7);

  > * {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const Text = styled.span`
    font-size: 20px;
    padding: 20px;
    color: #fff;
`;

export const Form = styled.form`
    display:flex;
    flex-wrap: wrap;
`;

export const Input = styled.input`
    display: flex;
    height: 30px;
    width: ${({width}) => width};
    background-color: lightgrey;
    margin: 5px;
    padding: 5px;
    border-radius: 7px;
    border-width: 2px;
    border-color: ${({borderColor}) => borderColor? borderColor : 'transparent'};
    
`;

export const Button = styled.button`
    background-color: limegreen;
    border-radius: 7px;
    margin: 5px;
    height: 40px;
    padding: 10px;
    width: 100px;

    > span {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
    }
`;

