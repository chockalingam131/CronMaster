export function parseCronExpression(cron: string): string {
  const parts = cron.trim().split(/\s+/)
  
  if (parts.length !== 5) {
    return 'Invalid cron expression. Expected 5 fields: minute hour day month weekday'
  }

  const [minute, hour, day, month, weekday] = parts
  const explanations: string[] = []

  // Minute
  if (minute === '*') {
    explanations.push('every minute')
  } else if (minute.includes('/')) {
    explanations.push(`every ${minute.split('/')[1]} minutes`)
  } else if (minute.includes(',')) {
    explanations.push(`at minutes ${minute}`)
  } else if (minute.includes('-')) {
    explanations.push(`at minutes ${minute}`)
  } else {
    explanations.push(`at minute ${minute}`)
  }

  // Hour
  if (hour === '*') {
    explanations.push('of every hour')
  } else if (hour.includes('/')) {
    explanations.push(`every ${hour.split('/')[1]} hours`)
  } else if (hour.includes(',')) {
    explanations.push(`at hours ${hour}`)
  } else if (hour.includes('-')) {
    explanations.push(`at hours ${hour}`)
  } else {
    explanations.push(`at ${hour}:00`)
  }

  // Day
  if (day !== '*') {
    if (day.includes('/')) {
      explanations.push(`every ${day.split('/')[1]} days`)
    } else if (day.includes(',')) {
      explanations.push(`on days ${day}`)
    } else if (day.includes('-')) {
      explanations.push(`on days ${day}`)
    } else {
      explanations.push(`on day ${day}`)
    }
  }

  // Month
  if (month !== '*') {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    if (month.includes(',')) {
      const monthNames = month.split(',').map(m => months[parseInt(m) - 1] || m).join(', ')
      explanations.push(`in ${monthNames}`)
    } else if (month.includes('-')) {
      const [start, end] = month.split('-')
      explanations.push(`in ${months[parseInt(start) - 1]} through ${months[parseInt(end) - 1]}`)
    } else {
      explanations.push(`in ${months[parseInt(month) - 1] || month}`)
    }
  }

  // Weekday
  if (weekday !== '*') {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    if (weekday.includes('-')) {
      const [start, end] = weekday.split('-')
      explanations.push(`on ${days[parseInt(start)]} through ${days[parseInt(end)]}`)
    } else if (weekday.includes(',')) {
      const dayNames = weekday.split(',').map(d => days[parseInt(d)]).join(', ')
      explanations.push(`on ${dayNames}`)
    } else {
      explanations.push(`on ${days[parseInt(weekday)]}`)
    }
  }

  return 'Runs ' + explanations.join(' ')
}
