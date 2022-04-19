import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

const Brands = () => {
	return (
		<>
			<section className="mt-5">
				<div
					className={`container diff ${styles.brands} d-md-flex justify-content-center align-items-center`}
				>
					<div className="row ">
						<div className="col-12">
							<div className={styles.block}>
								<h2 className="white">As Seen In</h2>
								<div
									className={`${styles.blockBrands} d-md-flex align-items-center mt-3`}
								>
									<div className="row w-100 d-md-flex align-items-center justify-content-between ms-20">
										<div className="col-4">
											<Image
												src="/img/itg.png"
												width="252"
												height="92"
												layout="fixed"
												alt="Brand In The Groove"
											/>
										</div>
										<div className="col-4">
											<Image
												src="/img/well-good.png"
												width="252"
												height="18"
												layout="fixed"
												alt="Brand Well Good"
											/>
										</div>
										<div className="col-4 text-center">
											<Image
												src="/img/allure.png"
												width="111"
												height="40"
												layout="fixed"
												alt="Brand Allure"
											/>
										</div>
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

export default Brands;
