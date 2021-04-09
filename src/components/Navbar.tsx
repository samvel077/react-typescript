import React from 'react'

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper  deep-purple darken-1 px1">
        <a href="/" className="brand-logo">React + Typescript</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/">spisok del</a></li>
          <li><a href="/">infarmaciya</a></li>
        </ul>
      </div>
    </nav>
  )
}
