import Link from 'next/link';
import React from 'react'
import styles from "./styles.module.scss"

const Button = ({text}) => {
    return (
        <>
            <Link href="/">
                <a className={styles.button}>learn more</a>
            </Link>
        </>
    )
}

export default Button;