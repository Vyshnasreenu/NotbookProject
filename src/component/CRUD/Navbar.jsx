import React from 'react'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'
const Navbar = () => {
  return (
    <div>
       <section id={style.nav}>
        <article>
          <Link to="/createpath">createuser</Link>
          <Link to="/userpath">userdetails</Link>
        </article>
</section>
    </div>
  )
}

export default Navbar