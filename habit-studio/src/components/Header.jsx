import React, { useEffect, useRef, useState } from 'react'

export default function Header({ onNavigate }){

  const btnRef = useRef(null)
  const menuRef = useRef(null)

  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      const root = document.documentElement
      const open = root.classList.contains('show-hamburger')
      if (!open) return
      const m = menuRef.current
      const items = m ? Array.from(m.querySelectorAll('.menu-item')) : []
      const active = document.activeElement
      const idx = items.indexOf(active)

      if (e.key === 'Escape') {
        toggleMenu(false)
        btnRef.current && btnRef.current.focus()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        const next = items[(idx + 1) % items.length]
        next && next.focus()
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        const prev = items[(idx - 1 + items.length) % items.length]
        prev && prev.focus()
      } else if (e.key === 'Home') {
        e.preventDefault(); items[0] && items[0].focus()
      } else if (e.key === 'End') {
        e.preventDefault(); items[items.length-1] && items[items.length-1].focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const onLeftEnter = () => {
    if (!pinned) toggleMenu(true, false)
  }
  const onLeftLeave = () => {
    if (!pinned) toggleMenu(false, false)
  }

  useEffect(() => {
    const onPointer = (e) => {
      const root = document.documentElement
      if (!root.classList.contains('show-hamburger')) return
      const btn = btnRef.current
      const menu = menuRef.current
      const target = e.target
      if (btn && (btn === target || btn.contains(target))) return
      if (menu && (menu === target || menu.contains(target))) return
      toggleMenu(false)
      btn && btn.focus()
    }

    document.addEventListener('pointerdown', onPointer)
    return () => document.removeEventListener('pointerdown', onPointer)
  }, [])

  return (
    <div className="topbar">
      <div className="left-controls" onPointerEnter={onLeftEnter} onPointerLeave={onLeftLeave}>
        <button ref={btnRef} className="hamburger" aria-label="home" id="home-button" aria-expanded="false" onClick={() => onNavigate('home')}>
          <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style={{color:'var(--hamburger-color)'}}>
            <path d="M18 8L8 16v12h6v-8h8v8h6V16L18 8z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </button>

        <div ref={menuRef} className="hamburger-menu" id="hamburger-menu" aria-hidden="false">
          <button className="menu-item" tabIndex="0" onClick={() => { onNavigate('tracking'); toggleMenu(false, true) }}>Habit Tracking</button>
          <button className="menu-item" tabIndex="0" onClick={() => { onNavigate('database'); toggleMenu(false, true) }}>Statistics</button>
          <button className="menu-item" tabIndex="0" onClick={() => { onNavigate('journalling'); toggleMenu(false, true) }}>Journalling</button>
        </div>
      </div>

      <div style={{textAlign:'center'}}>
        <div className="title">HABIT STUDIO</div>
        <div className="subtitle">presented to you by group 18</div>
      </div>

      
    </div>
  )
}
