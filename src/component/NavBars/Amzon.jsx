import React from 'react'
import { useState } from 'react'
import style from './amzon.module.css'
const Amzon = () => {
  let [isactive,setactive]=useState(false)
  return (
    <div>
     <section id={style.nav}>
        <article>
           <div id={style.logo}>
           <a href="#"><i class="fa-brands fa-amazon"></i><p>Amazon</p></a>
           </div>
            <div className={style.loc}>
              <div id={style.icon}>
                <a href="">   
                  <p>Hello</p>
                   <h1> <span><i class="fa-solid fa-location-dot"></i></span> Select your Address</h1>
                </a>
              </div>
            </div>
            {/* --------- */}
            <div id={style.search}>
             <div id={style.border}>
             <div className={style.select}>
                 <select name="" id="">
             <option value="">All</option>
             <option value="">fants</option>
             <option value="">shirts</option>
             <option value="">bats</option>
                 </select>
              </div>
              <div className={style.text}>
                <input type="text" name='amazon' />
                </div>
              <div className={style.searchicon}>
                  <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
              </div>
             </div>
            </div>
                <div id={style.lang}>
                  <a href="#"> 
                    <p><i class="fa-solid fa-flag"></i></p>
                    <strong>EN <sub><i class="fa-solid fa-caret-down"></i></sub></strong>
                  </a><sub><i class="fa-solid fa-caret-down"></i></sub>
                </div>
                <div>
                  <div id={style.account}>
                   <a href="*"><p>Hello,Sign in</p> 
                     <strong>Acconts & Lists <sub><i class="fa-solid fa-caret-down"></i></sub></strong>
                     </a>
                  </div>
                </div>
                <div>
                  <div id={style.order}>
                   <a href="&">
                   <p>Returns</p>
                    <strong>& Orders</strong>
                   </a>
                  </div>
                </div>
                <div id={style.cart}>
                    <a href="$"><strong><i class="fa-sharp fa-solid fa-cart-shopping"></i></strong><sub>cart</sub></a>
                </div>
                <button  id={style.but}  onClick={()=>{setactive(!isactive)}}><sub><i class="fa-solid fa-caret-down"></i></sub></button>
        </article>
     </section>
     {isactive && ( <section id={style.nav2}>
            <article>
                <div id={style.all}>
                <span> <i class="fa-solid fa-bars"></i> </span>
                  <h2> All</h2>
                </div>
                <div id={style.seller}>
                   <h2>Best Sellers</h2>
                </div>
                <div id={style.mob}>
                  <h2>Mobiles</h2>
                </div>
                <div id={style.deal}>
                  <h2>Today's deal</h2>
                </div >
                <div id={style.service}>
                  <h2>Customer's service</h2>
                </div>
                <div className={style.elect}>
                  <h2>Electronics</h2>
                </div>
                <div className={style.prime}>
                  <h2>Prime <sub style={{color:"gray"}}><i class="fa-solid fa-caret-down"></i></sub></h2>
                </div>
                <div className={style.fash}>
                  <h2>Fashion</h2>
                </div>
                <div className={style.home}>
                 <h2>Home & Kitchen</h2>
                </div>
                <div id={style.new}>
               <h2>New Releases</h2>
                </div>

                <div id={style.yash}>
                  <a href="">
                    <h1>YASHODA</h1>
                       
                  </a>
                </div>
            </article>
        </section>)}  
    </div>
  )
}

export default Amzon