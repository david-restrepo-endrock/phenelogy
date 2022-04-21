import React from "react";
import styles from "./styles.module.scss";
import Brands from "../Brands";

const BlockTextFour = () => {
	return (
		<>
			<section className="mt-5">
				<div
					className={`container diff ${styles.brands} d-md-flex justify-content-center align-items-center`}
				>
					<div className="row py-5 py-md-0 px-3 px-md-0">
						<div className="col-12">
							<div className={styles.block}>
								<h2 className="white">As Seen In</h2>
								<div className={styles.blockBrands}>
									<Brands />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlockTextFour;
