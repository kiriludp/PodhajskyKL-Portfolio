import React from 'react';
import '../style/Header.css'
import profpic from "../style/imgs/profilepic (2).jpg";
export default function About () {

    const styles = {
        header: {
            background: 'black',
            color: 'white'
        }
    }
    
    
    return (
        <header className= 'header' style={styles.header}>
            
            <h1>Killian L. Podhajsky</h1>
            <p></p>
            <h3> Full Stack Web Developer </h3>
            
        </header>
    )
}