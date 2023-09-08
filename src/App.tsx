import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react'
import {
  GlobalStyle,
  StyledGridContainer,
  StyledScreen,
  StyledButton,
} from './styles'
import { solve } from './helpers'

const buttonValues : string[] = [
  '1',
  '2',
  '3',
  '+',
  '4',
  '5',
  '6',
  '—',
  '7',
  '8',
  '9',
  '*',
  '0',
  '.',
  '-',
  '/',
]


export type NumberOrEmptyString = number |''

function App(): JSX.Element {
  // states
  const [result, setResult] = useState<NumberOrEmptyString >("")
  const [screenValue, setScreenValue] = useState<string>('')

  // functions
  const display  = (number : string) :void => {
    setScreenValue(`${screenValue}${number}`)
  }

  const clear:VoidFunction = ()=> {
    setScreenValue('')
  }

  useEffect(() => {
    setScreenValue(String(result))
  }, [result])

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <StyledGridContainer data-testid='calculator'>
        <StyledScreen value={screenValue} readOnly id="screen" />
        {buttonValues.map(button => (
          <StyledButton key={button} id={button} onClick={() => display(button)}>
            {button}
          </StyledButton>
        ))}
        <StyledButton
          id ="equal"
          equal
          onClick={() => {
            clear()
            solve(screenValue, setResult)
          }}
        >
          =
        </StyledButton>
        <StyledButton id ="clear" onClick={clear}>C</StyledButton>
      </StyledGridContainer>

      

    </>
  )
}

export default App
