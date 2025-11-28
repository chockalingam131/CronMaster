import { describe, it, expect } from 'vitest'
import { parseCronExpression } from '../src/utils/cronParser'

describe('parseCronExpression', () => {
  it('should parse a basic cron expression', () => {
    const result = parseCronExpression('0 9 * * 1-5')
    expect(result).toContain('Runs')
    expect(result).toContain('at minute 0')
    expect(result).toContain('at 9:00')
  })

  it('should handle wildcard expressions', () => {
    const result = parseCronExpression('* * * * *')
    expect(result).toBe('Runs every minute of every hour')
  })

  it('should handle interval expressions', () => {
    const result = parseCronExpression('*/15 * * * *')
    expect(result).toContain('every 15 minutes')
  })

  it('should return error for invalid expression', () => {
    const result = parseCronExpression('invalid')
    expect(result).toContain('Invalid cron expression')
  })

  it('should handle specific day of month', () => {
    const result = parseCronExpression('0 0 1 * *')
    expect(result).toContain('on day 1')
  })

  it('should handle weekday ranges', () => {
    const result = parseCronExpression('0 9 * * 1-5')
    expect(result).toContain('Monday through Friday')
  })
})
