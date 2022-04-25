import React from "react";
import styles from "./styles.module.scss";
import Button from "../Buttons";
import Brands from "../Brands";

const BlockTextFive = ({ info }) => {
	const showImage = info.showCompleteBlock == false && `not-show-image`;

	return (
		<>
			<section className={styles.blockTextFive}>
				<div className={`${styles.blockContent} ${styles[showImage]}`}>
					<div className="container h-100">
						<div className="row align-content-between h-100">
							<div className="col-12">
								<div className={styles.blockBrands}>
									<h2 className="text-center mb-4">As Seen In</h2>
									<Brands />
								</div>
							</div>
							{info.showCompleteBlock && (
								<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
									<div className={styles.block}>
										<div className={styles.text}>
											<h2>
												Need help deciding what product is right for you?{" "}
											</h2>
											<p className="my-4">
												Take our two-minute menopause assessment to get product
												recommendations, track your journey and plan for what’s
												ahead.
											</p>
											<Button text={info.buttonText} link={info.buttonLink} />
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlockTextFive;
