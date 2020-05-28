import Link from 'next/link'
import SvgLogo from '../logo';
import { Sun, Moon, ZoomOut, ZoomIn, Bold, Share } from 'react-feather';
import '../../utils/header';
import React, { useState, useEffect } from 'react'

function Header(props) {
  const onLoadTheme = typeof localStorage !== 'undefined' && localStorage.getItem('BLOG_THEME')
  const onLoadZoom = typeof localStorage !== 'undefined' && localStorage.getItem('ZOOM')
  const [theme, setTheme] = useState(onLoadTheme)
  const [zoom, setZoom] = useState(onLoadZoom)
  const [mounted, setMounted] = useState(false)
  const switchTheme = () => {
    const setTo = theme === 'light' ? 'dark' : 'light'
    setTheme(setTo)
  }

  const switchZoom = () => {
    const setTo = zoom === 'smaller' ? 'bigger' : 'smaller'
    setZoom(setTo)
  }

  useEffect(() => {
    if (onLoadTheme) return
    if (onLoadZoom) return
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme('dark')
    }
    if (window.matchMedia("(prefers-zoom-scheme: bigger)").matches) {
      setZoom('bigger')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('data-zoom', zoom)
    localStorage.setItem('BLOG_THEME', theme)
    localStorage.setItem('ZOOM', zoom)
    setMounted(true)
  }, [theme, zoom])
  return (
    <div className="header">
      <div className="container">
        <div className="headerContainer">
          <Link href="/">
            < a className = "mrauto"alt="Go to Homepage">
              < SvgLogo className = "headerLogo"/>
            </a>
          </Link>
            <div className="mlauto">
            <button className="buttonHeader">
              <Share />
            </button>
            <button className="buttonHeader">
              <Bold /> 
            </button>
            <button className="buttonHeader" onClick={() => switchZoom()}>
              {zoom === 'bigger' ? <ZoomOut /> : <ZoomIn />}
            </button>
            <button className="buttonHeader" onClick={() => switchTheme()}>
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;