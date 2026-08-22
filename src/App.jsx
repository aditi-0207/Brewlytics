import { useEffect, useState } from 'react'

import Navbar from './components/landing/Navbar'
import Hero from './components/landing/Hero'
import ScrollStory from './components/landing/ScrollStory'

import Analyze from './components/analysis/Analyze'

function App() {
  const [page, setPage] = useState(
    window.location.hash === '#analyze'
      ? 'analyze'
      : 'landing'
  )

  useEffect(() => {
    const handleHashChange = () => {
      setPage(
        window.location.hash === '#analyze'
          ? 'analyze'
          : 'landing'
      )
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  if (page === 'analyze') {
    return <Analyze />
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollStory />
    </main>
  )
}

export default App