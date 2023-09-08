import { expect, describe, it } from 'vitest'
import { somme, sub, times, div } from './helpers'

describe('Testing multiplication', () => {
  it('should multiply two int together', () => {
    expect(times(2, 4)).toBe(8)
  })
  it('should multiply two float together', () => {
    expect(times(2.5, 2)).toBe(5)
  })
  it("shouldn't be false", () => {
    expect(times(1, 4)).not.toBe(3)
  })
})
describe('Testing addition', () => {
  it('should add two int together', () => {
    expect(somme(1, 2)).toBe(3)
  })
  it('should add two float together', () => {
    expect(somme(1, 2.5)).toBe(3.5)
  })
  it("shouldn't be false", () => {
    expect(somme(1, 4)).not.toBe(3)
  })
})

describe('Testing subtraction', () => {
  it('should subtract two number', () => {
    expect(sub(1, 4)).toBe(-3)
  })
  it('should not return an erroneous value', () => {
    expect(sub(1, 4)).not.toBe(3)
  })
})

describe('Testing division', () => {
  it('should divide to int together', () => {
    expect(div(4, 2)).toBe(2)
  })
  it('should divide two float together', () => {
    expect(div(2.5, 2)).toBe(1.25)
  })
  it("shouldn't be false", () => {
    expect(div(1, 4)).not.toBe(3)
  })
  it('should throw an error', () => {
    expect(() => div(1, 0)).toThrowError('impossible de div par 0')
  })
})


