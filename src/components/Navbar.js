import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper red darken-3">
        <a href="/" className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}