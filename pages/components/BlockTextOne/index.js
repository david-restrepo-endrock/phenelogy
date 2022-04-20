import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

const BlockTextOne = () => {
	return (
		<>
			<section className={styles.contentBlockTextOne}>
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-5">
							<div className={styles.block}>
								<h2 className="white">
									Are you experiencing any of these symptoms?
								</h2>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-6 d-md-flex align-items-center mt-4 mt-md-0">
							<div className={styles.blockGroupImages}>
								<div className={styles.blockImage}>
									<img src="/img/hot-flashes.png" alt="Hot Flashes" />
									<h4>
										Hot <br /> flashes
									</h4>
								</div>
								<div className={styles.blockImage}>
									<img src="/img/night-sweats.png" alt="Night Sweats" />
									<h4>
										Night <br /> sweats
									</h4>
								</div>
								<div className={styles.blockImage}>
									<img src="/img/mood-swings.png" alt="Mood Swings" />
									<h4>
										Mood <br /> swings
									</h4>
								</div>
								<div className={styles.blockImage}>
									<img src="/img/brain-fog.png" alt="Brain Fog" />
									<h4>Brain fog</h4>
								</div>
								<div className={styles.blockImage}>
									<img src="/img/insomnia.png" alt="Insomnia" />
									<h4>Insomnia</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlockTextOne;
