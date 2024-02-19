import React from 'react';
import styles from "./Featured.module.css"
import Image from 'next/image';


const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}><b className={styles.bold}>Hey, Lama Dev Here!</b> Discover my Stories and creative ideas</h1>
            <div className={styles.post}>
                <div className={styles.post}>
                    <div className={styles.imgContainer}>
                        <Image  className={styles.img} alt='p1'  src="/p1.jpeg" fill/>
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet. rem ipsum dolor sit amet.</h1>
                        <p className={styles.postDesc}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa fugit magnam molestiae alias iste explicabo nulla illo dicta ullam amet? Culpa fugit magnam molestiae alias iste explicabo nulla illo dicta ullam amet? Culpa fugit magnam molestiae alias iste explicabo nulla illo dicta ullam amet? Culpa fugit magnam molestiae alias iste explicabo nulla illo dicta ullam amet?
                        </p>
                        <button className={styles.button}>Read More...</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;