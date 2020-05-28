import React, { useState, useEffect } from 'react'

export default function zoomThemeHook () {
  const onLoadTheme = typeof localStorage !== 'undefined' && localStorage.getItem('BLOG_THEME')
  const onLoadZoom = typeof localStorage !== 'undefined' && localStorage.getItem('ZOOM')
  const [theme, setTheme] = useState(onLoadTheme)
  const [zoom, setZoom] = useState(onLoadZoom)
  const [mounted, setMounted] = useState(false)
  const switchTheme = () => {
    const setTo = theme === 'dark' ? 'light' : 'dark'
    setTheme(setTo)
  }

  const switchZoom = () => {
    const setTo = zoom === 'bigger' ? 'smaller' : 'bigger'
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
}