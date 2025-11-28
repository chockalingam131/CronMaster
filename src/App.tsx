import { useState, useEffect } from 'react'
import ExplainCron from './components/ExplainCron'
import BuildCron from './components/BuildCron'
import './App.css'

type Tab = 'explain' | 'build'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(() => {
    const saved = localStorage.getItem('activeTab')
    return (saved as Tab) || 'explain'
  })

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode')
    return saved === 'true'
  })

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab)
  }, [activeTab])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <header className="app-header">
          <div className="header-content">
            <div className="header-title">
              <h1>Kiro Week 1 Challenge</h1>
              <p>Micro Tools - Cron Expression Helper</p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="dark-mode-toggle"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </header>

        <main className="main-card">
          <div className="tabs-container">
            <button
              onClick={() => setActiveTab('explain')}
              className={`tab-button ${activeTab === 'explain' ? 'active' : ''}`}
            >
              Explain Cron
            </button>
            <button
              onClick={() => setActiveTab('build')}
              className={`tab-button ${activeTab === 'build' ? 'active' : ''}`}
            >
              Build Cron
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'explain' ? <ExplainCron /> : <BuildCron />}
          </div>
        </main>

        <footer className="app-footer">
          <p>Built for Kiro Challenge 🚀</p>
        </footer>
      </div>
    </div>
  )
}

export default App
