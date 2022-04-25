import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
	return (
		<>
			<div className={styles.wavyPlantImage}>
				<img
					src="/img/wavy-plant.png"
					width="100%"
					height="auto"
					className="d-none d-md-block"
				/>
				<img
					src="/img/wavy-plant-mob-2.png"
					width="100%"
					height="auto"
					className="d-md-none"
				/>
			</div>
			<footer className={styles.footer}>
				<div className="container-fluid">
					<div className="row">
						<div className={`col-6 col-sm-6 col-md-4 ${styles.item}`}>
							<h2 className="white">Shop</h2>
							<ul className="m-0 p-0">
								<li>
									<Link href="https://www.myphenology.com/products">
										<a target="_blank" className="white footer-link">
											Shop All
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.myphenology.com/minilab">
										<a target="_blank" className="white footer-link">
											MiniLab
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.myphenology.com/ingredients">
										<a target="_blank" className="white footer-link">
											Ingredients
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className={`col-6 col-sm-6 col-md-4 ${styles.item}`}>
							<h2 className="white">Guidance</h2>
							<ul className="m-0 p-0">
								<li>
									<Link href="https://www.myphenology.com/topics">
										<a target="_blank" className="white footer-link">
											Editorial
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.myphenology.com/assessment">
										<a target="_blank" className="white footer-link">
											Take the Assessment
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.myphenology.com/discover">
										<a target="_blank" className="white footer-link">
											Get Started
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.myphenology.com/faq">
										<a target="_blank" className="white footer-link">
											FAQ
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className={`col-6 col-sm-6 col-md-4 ${styles.item}`}>
							<h2 className="white">About</h2>
							<ul className="m-0 p-0">
								<li>
									<Link href="https://www.myphenology.com/team">
										<a target="_blank" className="white footer-link">
											Team
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.myphenology.com/our-approach">
										<a target="_blank" className="white footer-link">
											Approach
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.myphenology.com/contact-us">
										<a target="_blank" className="white footer-link">
											Contact Us
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className={`col-6 col-sm-6 col-md-4 ${styles.item}`}>
							<ul className="m-0 p-0">
								<li>
									<Link href="https://www.instagram.com/myphenology/">
										<a target="_blank" className="white footer-link">
											Instagram
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.facebook.com/MyPhenology/">
										<a target="_blank" className="white footer-link">
											Twitter
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.linkedin.com/company/myphenology/">
										<a target="_blank" className="white footer-link">
											LinkedIn
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className={`col-6 col-sm-6 col-md-4 ${styles.item}`}>
							<ul className="m-0 p-0">
								<li>
									<Link href="https://hologramsciences.com/privacy">
										<a target="_blank" className="white footer-link">
											Privacy Policy
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.myphenology.com/refund">
										<a target="_blank" className="white footer-link">
											Refund Policy
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.myphenology.com/shipping">
										<a target="_blank" className="white footer-link">
											Shipping Policy
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.myphenology.com/terms">
										<a target="_blank" className="white footer-link">
											Terms of Service
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.myphenology.com/disclaimer">
										<a target="_blank" className="white footer-link">
											Disclaimers
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className={`col-6 col-sm-6 col-md-4 ${styles.item}`}>
							<div>
								<p className="white">
									These statements have not been evaluated by the Food and Drug
									Administration. This product is not intended to diagnose,
									treat, cure or prevent any disease.
								</p>
							</div>
							<div className="mt-3">
								<p className="white">© 2022 All Rights Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
