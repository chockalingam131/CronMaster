import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ExplainCron from '../src/components/ExplainCron'

describe('ExplainCron', () => {
  it('should render input field', () => {
    render(<ExplainCron />)
    expect(screen.getByLabelText('Enter Cron Expression')).toBeInTheDocument()
  })

  it('should render explain button', () => {
    render(<ExplainCron />)
    expect(screen.getByText('Explain')).toBeInTheDocument()
  })

  it('should show explanation when button is clicked', () => {
    render(<ExplainCron />)
    const button = screen.getByText('Explain')
    fireEvent.click(button)
    expect(screen.getByText(/Explanation:/)).toBeInTheDocument()
  })

  it('should render examples', () => {
    render(<ExplainCron />)
    expect(screen.getByText(/Examples:/)).toBeInTheDocument()
  })
})
