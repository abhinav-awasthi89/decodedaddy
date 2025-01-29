"use client";
import React from 'react'
import styles from './Form.module.css'

function ConvinceForm() {
    return (
        <section id="contactUs" className={styles.ConvinceForm}>
            <p style={{ pointerEvents: "initial" }}>Still not conviced?</p>
            <p style={{ pointerEvents: "initial" }}>Drop a Quick Note!</p>
            <form style={{ pointerEvents: "initial" }} className={styles.Form} onSubmit={(e) => e.preventDefault()}>
                <label>What&apos;s your name?</label>
                <input type='text' placeholder='Shobhit Pratap Singh' />
                <label>Your Email?</label>
                <input type='email' placeholder='shobhit@gmail.com' />
                <label>Enter Your Phone number</label>
                <input type='number' placeholder='+91 8899776543' />
                <label>Write here!</label>
                <input placeholder='Hi, we want to establish our digital presence. How you can help us?' />
                <center>
                    <button>Submit</button>
                </center>
            </form>


        </section>
    )
}

export default ConvinceForm