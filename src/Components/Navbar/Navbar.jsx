import React from 'react';
import styles from "./Navbar.module.css"
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import AuthLinks from '../AuthLinks/AuthLinks';


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image width={24} height={24} src="/facebook.png" alt="facebook" />
                <Image width={24} height={24} src="/instagram.png" alt="instagram" />
                <Image width={24} height={24} src="/tiktok.png" alt="tiktok" />
                <Image width={24} height={24} src="/youtube.png" alt="youtube" />
            </div>
            <div className={styles.logo}>LamaBlog</div>
            <div className={styles.links}>
                <ThemeToggle/>
                <Link href="/">Home</Link>
                <Link href="/contacts">Contacts</Link>
                <Link href="/about">About</Link>
                <AuthLinks></AuthLinks>
            </div>
        </div>
    );
};

export default Navbar;