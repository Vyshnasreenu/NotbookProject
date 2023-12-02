import React from 'react'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'
const NavBar = () => {
  return (
    <div>
        <section id={style.nav}>
            <article>
                <div className={style.link}><Link to="Enterstud">EnterStudentInfo</Link></div>
               <div className={style.link1}><Link to="StudData">StudentDetails</Link></div>
            </article>
        </section>
    </div>
  )
}

export default NavBar