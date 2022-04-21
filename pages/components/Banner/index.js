import React from "react";
import Button from "../Buttons";
import styles from "./styles.module.scss";

const Banner = ({ info }) => {
	return (
		<section
			className={`${styles.banner} ${styles[info.backgroundColor]} ${
				styles[info.layout]
			}`}
		>
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-5">
						<div className="mb-5">
							<h1 className={info.whiteTextColor && "white"}>{info.title}</h1>
							<p className={info.whiteTextColor && "white"}>{info.text}</p>
						</div>
						<Button text={info.buttonText} link={info.buttonLink} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
