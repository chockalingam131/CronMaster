import { useState } from 'react'
import './BuildCron.css'

function BuildCron() {
  const [minute, setMinute] = useState('*')
  const [hour, setHour] = useState('*')
  const [day, setDay] = useState('*')
  const [month, setMonth] = useState('*')
  const [weekday, setWeekday] = useState('*')

  const cronExpression = `${minute} ${hour} ${day} ${month} ${weekday}`

  const fields = [
    { id: 'minute', label: 'Minute', value: minute, setter: setMinute, range: '0-59' },
    { id: 'hour', label: 'Hour', value: hour, setter: setHour, range: '0-23' },
    { id: 'day', label: 'Day of Month', value: day, setter: setDay, range: '1-31' },
    { id: 'month', label: 'Month', value: month, setter: setMonth, range: '1-12' },
    {
      id: 'weekday',
      label: 'Day of Week',
      value: weekday,
      setter: setWeekday,
      range: '0-6 (0=Sun)',
      fullWidth: true,
    },
  ]

  const references = [
    { symbol: '*', desc: 'Any value', example: 'Every minute/hour/day' },
    { symbol: '5', desc: 'Specific value', example: 'At minute 5' },
    { symbol: '1-5', desc: 'Range of values', example: 'Monday through Friday' },
    { symbol: '*/15', desc: 'Every N units', example: 'Every 15 minutes' },
    { symbol: '1,15,30', desc: 'Multiple values', example: 'At 1, 15, and 30' },
    { symbol: '0-23/2', desc: 'Range with step', example: 'Every 2 hours' },
  ]

  return (
    <div className="build-cron">
      <div className="output-section">
        <label>Generated Cron Expression</label>
        <div className="output-display">
          <code>{cronExpression}</code>
        </div>
      </div>

      <div className="fields-grid">
        {fields.map((field) => (
          <div key={field.id} className={`field-group ${field.fullWidth ? 'full-width' : ''}`}>
            <label htmlFor={field.id}>
              <span>{field.label}</span>
              <span className="field-range">({field.range})</span>
            </label>
            <input
              id={field.id}
              type="text"
              value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              placeholder="*"
              className="field-input"
            />
          </div>
        ))}
      </div>

      <div className="reference-section">
        <h3>Quick Reference</h3>
        <div className="reference-grid">
          {references.map((ref) => (
            <div key={ref.symbol} className="reference-item">
              <code>{ref.symbol}</code>
              <span className="ref-desc">{ref.desc}</span>
              <span className="ref-example">{ref.example}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BuildCron
