import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const Drawer = ({ showDrawer, handleDrawer }) => {
	return (
		<>
			<div className={`${styles.drawer} ${showDrawer && styles.open} `}>
				<div className="d-flex justify-content-between d-md-none">
					<div>
						<Link href="https://www.myphenology.com/">
							<a target="_blank">
								<img src="/img/logo.png" width="200" height="auto" />
							</a>
						</Link>
					</div>
					<div>
						<ul className="m-0 d-flex">
							<li>
								<Link href="https://www.myphenology.com/cart">
									<a target="_blank">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M17.9302 5.49145C16.5557 4.83618 14.9444 4.83618 13.5699 5.49145C12.2581 6.11682 11.3018 7.27289 10.9568 8.64545H6.76632C6.35126 8.64545 6 8.97255 6 9.39422V26.7512C6 26.9527 6.083 27.1441 6.22756 27.2837C6.37182 27.4231 6.56581 27.5 6.76632 27.5H24.7337C24.9342 27.5 25.1282 27.4231 25.2724 27.2837C25.417 27.1441 25.5 26.9527 25.5 26.7512V9.39422C25.5 8.97261 25.1489 8.64545 24.7338 8.64545H20.5433C20.1983 7.27289 19.242 6.11686 17.9302 5.49145ZM13.6657 7.18891C14.261 6.74255 14.9941 6.49885 15.7499 6.49748C16.5057 6.49882 17.2387 6.74254 17.8341 7.18891C18.3388 7.56732 18.7201 8.0729 18.9387 8.64549H12.561C12.7797 8.07292 13.161 7.56731 13.6657 7.18891ZM12.3482 13V10.1429H19.1514V13C19.1514 13.4216 19.5029 13.7486 19.9177 13.7486C20.3327 13.7486 20.684 13.4216 20.684 13V10.1429H23.9674L23.9674 26.0022H7.53238V10.1429H10.8157V12.9998C10.8157 13.4212 11.1666 13.7486 11.5818 13.7486C11.9966 13.7486 12.3482 13.4216 12.3482 13Z"
												fill="white"
											/>
										</svg>
									</a>
								</Link>
							</li>
							<li>
								<svg
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									onClick={(e) => handleDrawer()}
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M7.7071 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.7071L14.5858 16L6.29292 24.2929C5.9024 24.6834 5.9024 25.3166 6.29292 25.7071C6.68344 26.0976 7.31661 26.0976 7.70713 25.7071L16 17.4142L24.2929 25.7071C24.6834 26.0976 25.3166 26.0976 25.7071 25.7071C26.0976 25.3166 26.0976 24.6834 25.7071 24.2929L17.4142 16L25.7071 7.70711C26.0976 7.31659 26.0976 6.68343 25.7071 6.2929C25.3166 5.90238 24.6834 5.90238 24.2929 6.2929L16 14.5858L7.7071 6.29289Z"
										fill="white"
									/>
								</svg>
							</li>
						</ul>
					</div>
				</div>
				<i className="d-none d-md-block">
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						onClick={(e) => handleDrawer()}
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M7.7071 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.7071L14.5858 16L6.29292 24.2929C5.9024 24.6834 5.9024 25.3166 6.29292 25.7071C6.68344 26.0976 7.31661 26.0976 7.70713 25.7071L16 17.4142L24.2929 25.7071C24.6834 26.0976 25.3166 26.0976 25.7071 25.7071C26.0976 25.3166 26.0976 24.6834 25.7071 24.2929L17.4142 16L25.7071 7.70711C26.0976 7.31659 26.0976 6.68343 25.7071 6.2929C25.3166 5.90238 24.6834 5.90238 24.2929 6.2929L16 14.5858L7.7071 6.29289Z"
							fill="white"
						/>
					</svg>
				</i>
				<ul>
					<li>
						<Link href="https://www.myphenology.com/topics">
							<a target="_blank">
								<h2 className="white">
									<svg
										width="40"
										height="19"
										viewBox="0 0 40 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M31.0092 0.763604C30.6577 0.412132 30.0879 0.412132 29.7364 0.763604C29.3849 1.11508 29.3849 1.68492 29.7364 2.0364L36.7 9.00003C36.6949 9.00001 36.6898 9 36.6846 9H1.31538C0.588917 9 0 9.22386 0 9.5C0 9.77614 0.588917 10 1.31538 10H36.6846C36.6898 10 36.6949 9.99999 36.7 9.99997L29.7364 16.9636C29.3849 17.3151 29.3849 17.8849 29.7364 18.2364C30.0879 18.5879 30.6577 18.5879 31.0092 18.2364L39.1092 10.1364C39.4607 9.78492 39.4607 9.21508 39.1092 8.8636L31.0092 0.763604Z"
											fill="white"
										/>
									</svg>
									Editorial
								</h2>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://www.myphenology.com/products">
							<a target="_blank">
								<h2 className="white">
									<svg
										width="40"
										height="19"
										viewBox="0 0 40 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M31.0092 0.763604C30.6577 0.412132 30.0879 0.412132 29.7364 0.763604C29.3849 1.11508 29.3849 1.68492 29.7364 2.0364L36.7 9.00003C36.6949 9.00001 36.6898 9 36.6846 9H1.31538C0.588917 9 0 9.22386 0 9.5C0 9.77614 0.588917 10 1.31538 10H36.6846C36.6898 10 36.6949 9.99999 36.7 9.99997L29.7364 16.9636C29.3849 17.3151 29.3849 17.8849 29.7364 18.2364C30.0879 18.5879 30.6577 18.5879 31.0092 18.2364L39.1092 10.1364C39.4607 9.78492 39.4607 9.21508 39.1092 8.8636L31.0092 0.763604Z"
											fill="white"
										/>
									</svg>
									Shop
								</h2>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://www.myphenology.com/minilab">
							<a target="_blank">
								<h2 className="white">
									<svg
										width="40"
										height="19"
										viewBox="0 0 40 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M31.0092 0.763604C30.6577 0.412132 30.0879 0.412132 29.7364 0.763604C29.3849 1.11508 29.3849 1.68492 29.7364 2.0364L36.7 9.00003C36.6949 9.00001 36.6898 9 36.6846 9H1.31538C0.588917 9 0 9.22386 0 9.5C0 9.77614 0.588917 10 1.31538 10H36.6846C36.6898 10 36.6949 9.99999 36.7 9.99997L29.7364 16.9636C29.3849 17.3151 29.3849 17.8849 29.7364 18.2364C30.0879 18.5879 30.6577 18.5879 31.0092 18.2364L39.1092 10.1364C39.4607 9.78492 39.4607 9.21508 39.1092 8.8636L31.0092 0.763604Z"
											fill="white"
										/>
									</svg>
									MiniLab
								</h2>
							</a>
						</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link href="https://www.myphenology.com/team">
							<a target="_blank">
								<h4 className="white">Team</h4>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://www.myphenology.com/our-approach">
							<a target="_blank">
								<h4 className="white">Approach</h4>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://www.myphenology.com/ingredients">
							<a target="_blank">
								<h4 className="white">Ingredients</h4>
							</a>
						</Link>
					</li>
				</ul>
				<ul className="d-none d-md-block">
					<li>
						<Link href="https://www.facebook.com/MyPhenology/">
							<a target="_blank">
								<h5 className="white link">Facebook</h5>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://www.instagram.com/myphenology/">
							<a target="_blank">
								<h5 className="white link">Instagram</h5>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://www.linkedin.com/company/myphenology/">
							<a target="_blank">
								<h5 className="white link">LinkedIn</h5>
							</a>
						</Link>
					</li>
				</ul>
				<div className={`${styles.footerLinks} d-md-none`}>
					<span>
						<Link href="https://www.myphenology.com/sign-in">
							<a>
								<svg
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M19.3891 14.3891C18.3577 15.4205 16.9586 16 15.5 16C14.0414 16 12.6423 15.4205 11.6109 14.3891C10.5795 13.3577 10 11.9586 10 10.5C10 9.04136 10.5795 7.64233 11.6109 6.61089C12.6423 5.57945 14.0414 5 15.5 5C16.9586 5 18.3577 5.57945 19.3891 6.61089C20.4205 7.64233 21 9.04136 21 10.5C21 11.9586 20.4205 13.3577 19.3891 14.3891ZM18.2779 7.72212C17.5411 6.98533 16.5419 6.57143 15.5 6.57143C14.4581 6.57143 13.4589 6.98534 12.7221 7.72212C11.9853 8.45889 11.5714 9.45805 11.5714 10.5C11.5714 11.5419 11.9853 12.5411 12.7221 13.2779C13.4589 14.0147 14.4581 14.4286 15.5 14.4286C16.5419 14.4286 17.5411 14.0147 18.2779 13.2779C19.0147 12.5411 19.4286 11.5419 19.4286 10.5C19.4286 9.45805 19.0147 8.4589 18.2779 7.72212Z"
										fill="white"
									/>
									<path
										d="M22.6885 14.6879C23.1314 15.1293 23.3895 15.7307 23.408 16.3644L24.9898 26.0574C25.0272 26.2944 24.9607 26.5362 24.8081 26.7181C24.6556 26.8998 24.4325 27.003 24.199 26.9999H6.801C6.56749 27.003 6.34436 26.8998 6.19185 26.7181C6.03934 26.5362 5.97279 26.2945 6.01021 26.0574L7.59184 16.3644C7.61037 15.7307 7.86846 15.1293 8.31135 14.6879C8.75426 14.2465 9.34719 13.9996 9.9643 14C10.2469 14 10.508 14.1549 10.6492 14.4063C10.7904 14.6576 10.7904 14.9674 10.6492 15.2188C10.508 15.4701 10.2469 15.625 9.9643 15.625C9.75459 15.625 9.55335 15.7106 9.40508 15.863C9.2568 16.0153 9.17348 16.2221 9.17348 16.4375C9.17683 16.4809 9.17683 16.5242 9.17348 16.5676L7.7341 25.3752H23.2658L21.8264 16.5676C21.823 16.5242 21.823 16.4809 21.8264 16.4375C21.8264 16.2221 21.7431 16.0153 21.5948 15.863C21.4465 15.7106 21.2453 15.625 21.0356 15.625C20.753 15.625 20.4919 15.4701 20.3507 15.2188C20.2095 14.9674 20.2095 14.6576 20.3507 14.4063C20.4919 14.1549 20.753 14 21.0356 14C21.6527 13.9996 22.2456 14.2465 22.6885 14.6879Z"
										fill="white"
									/>
								</svg>
								Acount
							</a>
						</Link>
					</span>
					<span>
						<Link href="https://www.myphenology.com/assessment">
							<a>
								take the assessment
								<svg
									width="26"
									height="18"
									viewBox="0 0 26 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M17.6364 0.263604C17.285 -0.0878678 16.7151 -0.0878681 16.3636 0.263604C16.0122 0.615076 16.0122 1.18492 16.3636 1.5364L22.9272 8.1H0.9C0.402943 8.1 0 8.50294 0 9C0 9.49706 0.402943 9.9 0.9 9.9H22.9272L16.3636 16.4636C16.0122 16.8151 16.0122 17.3849 16.3636 17.7364C16.7151 18.0879 17.2849 18.0879 17.6364 17.7364L25.7364 9.6364C25.8303 9.54255 25.8991 9.43312 25.9428 9.31645C25.9707 9.24196 25.9884 9.16451 25.9959 9.08627C25.9974 9.0703 25.9985 9.0543 25.9992 9.03829C26.0004 9.01115 26.0003 8.98396 25.999 8.95683C25.9983 8.94167 25.9972 8.92653 25.9957 8.91142C25.9881 8.83397 25.9704 8.75731 25.9428 8.68356C25.8991 8.56688 25.8303 8.45746 25.7364 8.3636L17.6364 0.263604Z"
										fill="white"
									/>
								</svg>
							</a>
						</Link>
					</span>
				</div>
			</div>
		</>
	);
};

export default Drawer;
