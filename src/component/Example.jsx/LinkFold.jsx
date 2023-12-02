
import React from 'react'
import  content from './Style.module.css'
const LinkFold = () => {
    
  return (
    <div id={content.center}>
    <section id={content.section}>
         <ul>
             <li><a href="#">Link1</a></li>
             <li><a href="#">Link2</a></li>
             <li><a href="#">Link3</a></li>
         </ul>
     </section>
     </div>
  )
}

export default LinkFold