import { useEffect, useState } from 'react'

import Navbar from './components/landing/Navbar'
import Hero from './components/landing/Hero'
import ScrollStory from './components/landing/ScrollStory'

import Analyze from './components/analysis/Analyze'
import About from './pages/About'


function getPageFromHash() {
  const hash = window.location.hash

  if (hash === '#analyze') {
    return 'analyze'
  }

  if (hash === '#about') {
    return 'about'
  }

  return 'landing'
}


function App() {
  const [page, setPage] = useState(
    getPageFromHash()
  )


  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getPageFromHash()

      setPage(nextPage)

      /*
        When switching to a separate page,
        always start that page from the top.
      */
      if (
        nextPage === 'about' ||
        nextPage === 'analyze'
      ) {
        window.scrollTo(0, 0)
      }
    }


    window.addEventListener(
      'hashchange',
      handleHashChange
    )


    return () => {
      window.removeEventListener(
        'hashchange',
        handleHashChange
      )
    }
  }, [])


  /*
    If the user directly opens:
    localhost:5173/#about
    or
    localhost:5173/#analyze

    start the separate page at the top.
  */
  useEffect(() => {
    if (
      page === 'about' ||
      page === 'analyze'
    ) {
      window.scrollTo(0, 0)
    }
  }, [page])


  /* =========================
     ANALYZE PAGE
  ========================== */

  if (page === 'analyze') {
    return <Analyze />
  }


  /* =========================
     ABOUT PAGE
  ========================== */

  if (page === 'about') {
    return <About />
  }


  /* =========================
     LANDING PAGE
  ========================== */

  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollStory />
    </main>
  )
}


export default App