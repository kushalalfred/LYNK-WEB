import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.localStorage.getItem('lynk-dark-mode') === 'true'
  )

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
    window.localStorage.setItem('lynk-dark-mode', String(isDarkMode))

    return () => document.body.classList.remove('dark-mode')
  }, [isDarkMode])

  return (
    <>

      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode((darkMode) => !darkMode)} />
      
      <main>
        <Outlet/>
      </main>

      <Footer/>
    </>
  )
}
