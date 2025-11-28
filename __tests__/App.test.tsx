import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  it('should render the app title', () => {
    render(<App />)
    expect(screen.getByText('CronExplainer')).toBeInTheDocument()
  })

  it('should render both tabs', () => {
    render(<App />)
    expect(screen.getByText('Explain Cron')).toBeInTheDocument()
    expect(screen.getByText('Build Cron')).toBeInTheDocument()
  })

  it('should show ExplainCron component by default', () => {
    render(<App />)
    expect(screen.getByLabelText('Enter Cron Expression')).toBeInTheDocument()
  })
})
