import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Brands = () => {
	return (
		<>
			<div className={`${styles.brands} d-md-flex align-items-center mt-3 mb-4 mb-md-0 m-0`}>
				<div className="row w-100 d-md-flex align-items-center justify-content-between m-0">
					<div className="col-12 col-sm-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
						<Image
							src="/img/itg.png"
							width="252"
							height="92"
							layout="fixed"
							alt="Brand In The Groove"
						/>
					</div>
					<div className="col-12 col-sm-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
						<Image
							src="/img/well-good.png"
							width="252"
							height="18"
							layout="fixed"
							alt="Brand Well Good"
						/>
					</div>
					<div className="col-12 col-sm-12 col-md-4 text-center text-md-center mb-4 mb-md-0">
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
		</>
	);
};

export default Brands;
