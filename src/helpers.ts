import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { z } from 'zod'
import { NumberOrEmptyString } from './App'

export function somme(operand1: number, operand2: number): number {
  const result = operand1 + operand2

  return result
}

export function sub(operand1: number, operand2: number): number {
  const result = operand1 - operand2

  return result
}

export function times(operand1: number, operand2: number): number {
  const result = operand1 * operand2
  return result
}

export function div(operand1: number, operand2: number): number {
  if (operand2 === 0) {
    throw new Error('impossible de div par 0')
  } else {
    const result = operand1 / operand2

    return result
  }
}
export function modulo(operand1: number, operand2: number): number {
  if (operand2 === 0) {
    throw new Error('impossible de div par 0')
  } else {
    const result = operand1 % operand2

    return result
  }
}
export function power(operand1: number, operand2: number): number {
  const result = operand1 ** operand2
  return result
}

export function solve(
  operation: string,
  dispatchSetStateAction: React.Dispatch<
    React.SetStateAction<NumberOrEmptyString>
  >,
): void {
  const formulaRegex: RegExp =
    /^(-?\d+(\.\d+)?)\s*([+*/—^%])\s*(-?\d+(\.\d+)?)$/g
  const operators: RegExp = /[+—*/^%]/g
  const operationSchema: z.ZodString = z.string().min(3).regex(formulaRegex)

  try {
    operationSchema.parse(operation)
  } catch (error) {
    if (error instanceof z.ZodError) {
      toast.error('Pas une formule arithmétique: ')
      return
    }
    toast.error('Bizarre ')
    return
  }

  const operandSchema = z.coerce.number()
  const parts = operation.split(operators)

  const operands: number[] = parts.map(part => operandSchema.parse(part.trim())) // conversion en nombre

  const [firstOperand, secondOperand]: number[] = operands
  const matches = operation.match(operators)

  let operator: RegExpMatchArray[number] | null = null
  if (matches !== null) {
    ;[operator] = matches
  }

  switch (operator) {
    case '+':
      dispatchSetStateAction(somme(firstOperand, secondOperand))
      break
    case '—':
      dispatchSetStateAction(sub(firstOperand, secondOperand))
      break
    case '*':
      dispatchSetStateAction(times(firstOperand, secondOperand))
      break
    case '/':
      dispatchSetStateAction(div(firstOperand, secondOperand))
      break
    case '^':
      dispatchSetStateAction(power(firstOperand, secondOperand))
      break
    case '%':
      dispatchSetStateAction(modulo(firstOperand, secondOperand))
      break

    default:
      window.console.log('default case')
      break
  }
}
