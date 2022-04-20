import Image from "next/image";
import React from "react";
import Button from "../Buttons";
import styles from "./styles.module.scss";

const Banner = () => {
	return (
		<section className={styles.banner}>
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-5">
						<div className="mb-5">
							<h1 className="white">
								Science-backed, naturally-sourced menopause relief
							</h1>
							<p className="white">
								Phenology helps women feel their best with a scientifically
								proven, holistic approach to understanding and managing
								menopause, naturally.
							</p>
						</div>
						<Button text="learn more" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
