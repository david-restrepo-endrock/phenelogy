import React from "react";
import styles from "./styles.module.scss";
import Button from "../Buttons";
import Brands from "../Brands";

const BlockTextFive = () => {
	return (
		<>
			<section className={styles.blockTextFive}>
				<div className={styles.blockContent}>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className={styles.blockBrands}>
									<h2 className="text-center mb-4">As Seen In</h2>
									<Brands />
								</div>
							</div>
							<div className="col-12 col-sm-12 col-md-8">
								<div className={styles.block}>
									<img
										src="/img/symptom.png"
										width="100%"
										className="d-md-none"
										alt=""
									/>
									<div className={styles.text}>
										<h2>Need help deciding what product is right for you? </h2>
										<p className="my-4">
											Take our two-minute menopause assessment to get product
											recommendations, track your journey and plan for what’s
											ahead.
										</p>
										<Button text="Take the Assessment" />
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

export default BlockTextFive;
