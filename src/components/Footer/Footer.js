"use client";

import Image from 'next/image';
import styles from './Footer.module.css';
import { officeLocation, officePhone, officeMail } from '../../constants.js'

const Footer = () => {
    return (
        <section style={{ pointerEvents: "initial" }} className={styles.footerContainer}>
            <div className={styles.socialParent}>
                <div>
                    <Image width={150} height={150} src="/img/logo2.png" alt="Decode Daddy" />
                    <p style={{ textAlign: "center", fontWeight: 'bolder', fontSize: "32px", marginBottom: '5%', lineHeight: '1' }}>Transforming Businesses Digitally</p>
                    <p style={{ textWrap: 'nowrap' }}>&copy; 2024 SJSV VENTURES PVT LTD</p>
                    <p>All Rights Reserved</p>
                </div>
                <div>
                    <p style={{ fontSize: '34px', fontWeight: '400', textWrap: 'nowrap' }}>Let&apos;s Get Social!</p>
                    <div className={styles.social}>
                        <div className={styles.socialLogo}>
                            <Image sizes="(max-width: 768px) 40px, 100px" src="/img/lilogo.png" alt="linkedIn" fill />
                        </div>
                        <div className={styles.socialLogo}>
                            <Image sizes="(max-width: 768px) 40px, 100px" src="/img/iglogo.png" alt='Insta' fill />
                        </div>
                        <div className={styles.socialLogo}>
                            <Image sizes="(max-width: 768px) 40px, 100px" src="/img/fblogo.png" alt='Facebook' fill />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.columns}>
                <div>
                    <p>OUR SERVICES</p>
                    <p>Web Design & Development</p>
                    <p>IT Solutions</p>
                    <p>Digital Marketing</p>
                    <p>SEO</p>
                    <p>App Development</p>
                </div>
                <div>
                    <p>COMPANY</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Client Login</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>

            <div className={styles.contactInfo}>
                <div>
                    <div className={styles.ourContact}>
                        <Image src="/img/location.svg" fill style={{ fill: 'black', aspectRatio: '1/1' }} alt="Location icon" />
                    </div>
                    <span>{officeLocation}</span>
                </div>
                <div>
                    <div className={styles.ourContact} >
                        <Image src="/img/phone.svg" fill style={{ fill: 'black', aspectRatio: '1/1' }} alt="Phone icon" />

                    </div>
                    <span>{officePhone}</span>
                </div>
                <div>
                    <div className={styles.ourContact}>
                        <Image src="/img/mail.svg" fill alt="Mail icon" style={{ fill: 'black', aspectRatio: '1/1' }} />
                    </div>
                    <span>{officeMail}</span>
                </div>
            </div>
            <div className={styles.DECODEDADDY_container}>
                <div className={styles.DECODEDADDY}>
                    <p>decode daddy</p>
                </div>
            </div>

        </section>
    );
};

export default Footer;