import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    display: flex;
    place-items: center;
    justify-content: center;

    min-width: 320px;
    min-height: 100vh;  }
`

export const StyledGridContainer = styled.div`
  display: grid;
  justify-items: stretch;
  grid-template-columns: repeat(4, 60px [col-start]);
  grid-template-rows: repeat(6, 60px [row-start]);
  box-shadow: 5px 5px 5px rgb(217, 212, 212);
  
`
interface ButtonEqual {
  equal?: boolean;
}

export const StyledButton = styled.button<ButtonEqual>`
  grid-row-start: ${props => (props.equal ? '6' :'' )};
  grid-column-start: ${props => (props.equal ? '1' :'')};
  grid-column-end:  ${props => (props.equal ? '4' :'')};
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: Cascadia Code;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;
  justify-self: stretch;
  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`

export const StyledScreen = styled.input`
  font-family: Cascadia Code;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 5;
  font-size: 1.5em;
  font-weight: 500;
  color: #abddad;
  background-color: #1a1a1a;
  cursor: pointer;

  justify-self: stretch;
`