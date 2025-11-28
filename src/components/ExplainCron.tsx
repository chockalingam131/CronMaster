import { useState } from 'react'
import { parseCronExpression } from '../utils/cronParser'
import './ExplainCron.css'

function ExplainCron() {
  const [cronExpression, setCronExpression] = useState('0 9 * * 1-5')
  const [explanation, setExplanation] = useState('')

  const handleExplain = () => {
    setExplanation(parseCronExpression(cronExpression))
  }

  const examples = [
    { cron: '0 9 * * 1-5', desc: 'Weekdays at 9 AM' },
    { cron: '*/15 * * * *', desc: 'Every 15 minutes' },
    { cron: '0 0 1 * *', desc: 'First day of every month' },
    { cron: '0 */2 * * *', desc: 'Every 2 hours' },
    { cron: '0 0 * * 0', desc: 'Every Sunday at midnight' },
  ]

  return (
    <div className="explain-cron">
      <div className="input-section">
        <label htmlFor="cron-input">Enter Cron Expression</label>
        <div className="input-group">
          <input
            id="cron-input"
            type="text"
            value={cronExpression}
            onChange={(e) => setCronExpression(e.target.value)}
            placeholder="0 9 * * 1-5"
            className="cron-input"
          />
          <button onClick={handleExplain} className="explain-button">
            Explain
          </button>
        </div>
      </div>

      {explanation && (
        <div className="explanation-box">
          <h3>Explanation</h3>
          <p>{explanation}</p>
        </div>
      )}

      <div className="examples-section">
        <h3>Quick Examples</h3>
        <div className="examples-list">
          {examples.map((example) => (
            <button
              key={example.cron}
              onClick={() => setCronExpression(example.cron)}
              className="example-item"
            >
              <code>{example.cron}</code>
              <span>- {example.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExplainCron
