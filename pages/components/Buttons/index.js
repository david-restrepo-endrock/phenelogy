import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const Button = ({ text, link }) => {

	return (
		<>
			<div className="my-4 my-md-4">
				<Link href={link}>
					<a target="_blank" className={`${styles.button} btn btn-default`}>{text}</a>
				</Link>
			</div>
		</>
	);
};

export default Button;
