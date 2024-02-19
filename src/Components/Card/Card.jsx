import Image from 'next/image';
import React from 'react';
import styles from "../Card/Card.module.css";
import Link from 'next/link';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src="/p1.jpeg" alt='' fill/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>11.02.2024 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link className={styles.link} href="/">
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing .</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui similique eligendi vero ex ducimus et soluta ea harum commodi, ipsum provident deleniti sequi quod ut placeat pariatur recusandae atque quis quisquam a enim. Nostrum, maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui similique eligendi vero ex ducimus et soluta ea harum commodi, ipsum provident deleniti sequi quod ut placeat pariatur recusandae atque quis quisquam a enim. Nostrum, maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link className={`${styles.link} ${styles.readMore}`} href="/">Read More</Link>
            </div>
        </div>
    );
};

export default Card;