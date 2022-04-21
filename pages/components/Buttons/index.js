import Link from "next/link";
import React from "react";

const Button = ({ text, link }) => {
	return (
		<>
			<div className="mt-4 mt-md-5">
				<Link href="/">
					<a className="button-primary">{text}</a>
				</Link>
			</div>
		</>
	);
};

export default Button;
