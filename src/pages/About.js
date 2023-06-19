import React from 'react';

import "../style/About.css"
import profpic from "../style/imgs/profilepic (2).jpg"

export default function About () {
   

    return (
     
        <div className="main">
          
            <div className="Title">
                <h2>About Me</h2> 
                
            </div>
            
            <div className="excerpt">
              
              <p> I am a motivated and dedicated professional seeking opportunities to further my skills and learning and contribute to a constantly evolving industry. I appreciate challenges and utilizing creative solutions for difficult problems. With a work history that has primarily been centered around customer experience, I am very passionate about ensuring a positive and enjoyable user experience and believe that the first step to success is building cooperative relationships with those around you. </p>
              <br></br>
              <p> I recently graduated from University of Washington's Full Stack Coding Bootcamp and am excited to apply my new skills to real problems and real solutions.</p>
              <div className="pic">
            <img src = {profpic}></img>
            </div>
            </div>
         
            
          
      </div>
    );
  }