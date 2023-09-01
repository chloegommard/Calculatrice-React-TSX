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
  '-',
  '7',
  '8',
  '9',
  '*',
  '0',
  '.',
  '',
  '/',
]



function App(): JSX.Element {
  // states
  const [result, setResult] = useState<string>('')
  const [screenValue, setScreenValue] = useState<string>('')

  // functions
  function display(number : string) {
    setScreenValue(`${screenValue}${number}`)
  }

  function clear() {
    setScreenValue('')
  }

  useEffect(() => {
    setScreenValue(result)
  }, [result])

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <StyledGridContainer>
        <StyledScreen value={screenValue} readOnly />
        {buttonValues.map(button => (
          <StyledButton key={button} onClick={() => display(button)}>
            {button}
          </StyledButton>
        ))}
        <StyledButton
          onClick={() => {
            clear()
            solve(screenValue, setResult)
          }}
        >
          =
        </StyledButton>
        <StyledButton onClick={clear}>C</StyledButton>
      </StyledGridContainer>
    </>
  )
}

export default App
