import React from "react";
import styles from "./styles.module.scss";
import Button from "../Buttons";

const CustomerFavorites = ({ info }) => {
	return (
		<>
			<section className="my-5">
				<h2 className="text-center mb-5 mt-3">Customer Favorites</h2>
				<div className={`container-fluid ${styles.customerFavorites}`}>
					<div className="row">
						<div className="col-12 col-sm-12 col-md-12">
							<ul className={styles.card}>
								<li>
									<div className={styles.item}>
										<div className={styles.card}>
											<img
												src="/img/product-1.png"
												width="584"
												height="520"
												className="d-none d-md-block"
											/>
											<img
												src="/img/product-1-mob.png"
												width="327"
												height="432"
												className="d-md-none"
											/>
										</div>
										<div className={styles.info}>
											<div className={styles.title}>
												<h2>Morning and Evening Gummy Duo Supplements</h2>
												<Button text={info.first.buttonText} link={info.first.buttonLink} />
											</div>
											<div className={styles.tags}>
												<h4>Hot flashes</h4>
												<h4>Night sweats </h4>
												<h4>Mood swings</h4>
												<h4>Brain fog</h4>
											</div>
											<div className="d-md-none">
												<Button text={info.first.buttonText} link={info.first.buttonLink} />
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className={`${styles.item}`}>
										<div className={`${styles.card}`}>
											<img
												src="/img/product-2.png"
												width="584"
												height="520"
												className="d-none d-md-block"
											/>
											<img
												src="/img/product-2-mob.png"
												width="327"
												height="432"
												className="d-md-none"
											/>
										</div>
										<div className={styles.info}>
											<div className={styles.title}>
												<h2>Daily Glow Facial Cream</h2>
												<Button text={info.second.buttonText} link={info.second.buttonLink} />
											</div>
											<div className={styles.tags}>
												<h4>Skin hydration</h4>
												<h4>Anti-aging</h4>
											</div>
											<div className="d-md-none">
												<Button text={info.second.buttonText} link={info.second.buttonLink} />
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className={`${styles.item}`}>
										<div className={`${styles.card}`}>
											<img
												src="/img/product-3.png"
												width="584"
												height="520"
												className="d-none d-md-block"
											/>
											<img
												src="/img/product-3-mob.png"
												width="327"
												height="432"
												className="d-md-none"
											/>
										</div>
										<div className={styles.info}>
											<div className={styles.title}>
												<h2>Cooling Mist Skin Soothing Atomizer</h2>
												<Button text={info.third.buttonText} link={info.third.buttonLink} />
											</div>
											<div className={styles.tags}>
												<h4>Hot flashes </h4>
												<h4>Night sweats </h4>
											</div>
											<div className="d-md-none">
												<Button text={info.third.buttonText} link={info.third.buttonLink} />
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className={`${styles.item}`}>
										<div className={`${styles.card}`}>
											<img
												src="/img/product-4.png"
												width="584"
												height="520"
												className="d-none d-md-block"
											/>
											<img
												src="/img/product-4-mob.png"
												width="327"
												height="432"
												className="d-md-none"
											/>
										</div>
										<div className={styles.info}>
											<div className={styles.title}>
												<h2>Lucid Lift Clarity Mints</h2>
												<Button text={info.fourth.buttonText} link={info.fourth.buttonLink} />
											</div>
											<div className={styles.tags}>
												<h4>Brain fog</h4>
												<h4>Fatigue</h4>
											</div>
											<div className="d-md-none">
												<Button text={info.fourth.buttonText} link={info.fourth.buttonLink} />
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="text-center d-block">
					<Button text={info.buttonText} link={info.buttonText} />
				</div>
			</section>
		</>
	);
};

export default CustomerFavorites;
