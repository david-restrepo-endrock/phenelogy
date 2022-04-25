import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const BlockAbout = ({ info }) => {
	return (
		<>
			<section className={`${styles.blockAbout}`}>
				<div className="container">
					<div className={`row ${styles.block}`}>
						<div className="col-12">
							<span>About</span>
							<h2 className="white">Get to know Phenology</h2>
							<hr />
						</div>
					</div>
					<div className={`row ${styles.blockImages}`}>
						<div className="col-12 col-sm-12 col-md-4 mb-5 mb-md-0">
							<Image
								src="/img/about-1.png"
								width="329"
								height="317"
								layout="responsive"
							/>
							<h4 className="white bold mt-3">Personalized Partnership</h4>
							<p className="white my-3">
								Phenology combines product, coaching, and at-home diagnostics so
								you receive a menopause plan tailored to you.
							</p>
							<Link href={info.post1.buttonLink}>
								<a className="white">{info.post1.buttonText}</a>
							</Link>
						</div>
						<div className="col-12 col-sm-12 col-md-4 mb-5 mb-md-0">
							<Image
								src="/img/about-2.png"
								width="329"
								height="317"
								layout="responsive"
							/>
							<h4 className="white bold mt-3">By women, for women.</h4>
							<p className="white my-3">
								Phenology is a women-led collective of doctors, scientists, and
								advisors improving women’s health and wellness.
							</p>
							<Link href={info.post2.buttonLink}>
								<a className="white">{info.post2.buttonText}</a>
							</Link>
						</div>
						<div className="col-12 col-sm-12 col-md-4 mb-5 mb-md-0">
							<Image
								src="/img/about-3.png"
								width="329"
								height="317"
								layout="responsive"
							/>
							<h4 className="white bold mt-3">Editorial Series</h4>
							<p className="white my-3">
								Phenology delivers the insights and facts you need to make the
								most of your menopause journey.
							</p>
							<Link href={info.post3.buttonLink}>
								<a className="white">{info.post3.buttonText}</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlockAbout;
