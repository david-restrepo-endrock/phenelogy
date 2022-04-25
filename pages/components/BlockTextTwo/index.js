import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import Button from "../Buttons";

const BlockTextTwo = ({ info }) => {
	return (
		<>
			<section className={styles.blockTextTwo}>
				<div className="container diff">
					<div className="row mt-md-5 pt-md-3 justify-content-between">
						<div className="col-12 col-sm-12 col-md-5">
							<h2 className="text-center text-md-start my-5 mb-md-0">
								Get symptom relief and menopause guidance tailored to you.
							</h2>
						</div>
						<div className="col-12 col-sm-12 col-md-4 d-flex justify-content-end px-4 px-md-0">
							<div>
								<div className={styles.blockImage}>
									<Image
										src="/img/symptom.png"
										width="445"
										height="472"
										layout="responsive"
									/>
								</div>
								<div className="mt-4">
									<p>
										Take our two-minute menopause assessment to track your
										journey, get product recommendations and plan for what’s
										ahead.
									</p>
								</div>
								<Button text={info?.buttonText} link={info?.buttonLink} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlockTextTwo;
