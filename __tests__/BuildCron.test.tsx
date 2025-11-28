import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BuildCron from '../src/components/BuildCron'

describe('BuildCron', () => {
  it('should render all input fields', () => {
    render(<BuildCron />)
    expect(screen.getByLabelText(/Minute/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Hour/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Day of Month/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Month/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Day of Week/)).toBeInTheDocument()
  })

  it('should display generated cron expression', () => {
    render(<BuildCron />)
    expect(screen.getByText('* * * * *')).toBeInTheDocument()
  })

  it('should show quick reference', () => {
    render(<BuildCron />)
    expect(screen.getByText('Quick Reference:')).toBeInTheDocument()
  })
})
