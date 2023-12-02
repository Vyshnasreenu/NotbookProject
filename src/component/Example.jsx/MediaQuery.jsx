import React from 'react'
import content from './Style.module.css'
const MediaQuery = () => {
  return (
    <div >
        <nav id={content.nav}>
            <h1>Welcome to Our Webpage!!!</h1>
        </nav>

       <div id={content.center}>
       <section id={content.section}>
           <a href="">Link1</a> <br />
           <a href="">Link2</a> <br />
           <a href="">Link3</a><br />
        </section>
          <div id={content.theory}>
            <h1>THE CITY</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed delectus porro ullam ipsum, totam maxime quidem explicabo similique iure quod sunt soluta repudiandae quo voluptatibus, provident fugit molestiae veniam rerum.</p>
          </div>
          <div id={content.box}>
               <h1>ADDRESS <br />
                <span>12-366,Bhaskerpet,SRIKALAHSTI,CHITTOOR</span>
               </h1>
                 <h2>STATE <br />
                    <span>Andhrapradesh</span>
                 </h2>
                 <h3>COUNTRY <br />
                    <span>INDIA</span>
                 </h3>
          </div>
       </div>
       <footer className={content.foot}>
                <h1>GOOOOOD BOY !!! 
                    <p>&#129409;</p>
                </h1>
            </footer>
    </div>
  )
}

export default MediaQuery