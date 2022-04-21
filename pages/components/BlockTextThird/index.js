import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

const BlockTextThird = ({info}) => {
	return (
		<>
			<section className={`${styles.blockTextThird} mt-5 pt-5`}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-sm-12 col-md-6 px-4 px-md-5">
							<Image
								src={info.image}
								width="578"
								height="640"
								layout="responsive"
							/>
						</div>
						<div className="col-12 col-sm-12 col-md-6 mt-5 px-4 mt-md-0 pt-4 pt-md-0 px-md-0">
							<div className="row">
								<div className="col-6 col-sm-6 col-md-6">
									<div
										className={`${styles.blockText} ${styles.blockIconEstrogen}`}
									>
										<h5>Estrogen Free</h5>
									</div>
									<div
										className={`${styles.blockText} ${styles.variant} ${styles.blockIconUsa}`}
									>
										<h5>Made in the USA</h5>
									</div>
									<div
										className={`${styles.blockText} ${styles.blockIconDrugFree}`}
									>
										<h5>Drug Free</h5>
									</div>
								</div>
								<div className="col-6 col-sm-6 col-md-6">
									<div
										className={`${styles.blockText} ${styles.variant} ${styles.blockIconArtificial}`}
									>
										<h5>No Artificial Dyes</h5>
									</div>
									<div
										className={`${styles.blockText} ${styles.blockIconFreeShipping}`}
									>
										<h5>Free shipping</h5>
									</div>
									<div
										className={`${styles.blockText} ${styles.variant} ${styles.blockIconScience}`}
									>
										<h5>Science-backed</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlockTextThird;
