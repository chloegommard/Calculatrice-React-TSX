import { expect, describe, it } from 'vitest'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import App from './App.tsx'

describe('Visual regression', () => {
    it('calculator', () => {
      // Arrange
      // Mount / render the App
      render(<App />)
      
      // Act
      // Do the actions, if any...
  
      // Assert
      // Test if the snapshot is the same
      //const button = getByText('1');

      const calc = screen.getByTestId('calculator')
      expect(calc).toMatchSnapshot();
    })
    
  })