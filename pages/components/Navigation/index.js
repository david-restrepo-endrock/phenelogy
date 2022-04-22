import Link from "next/link";
import React, { useState } from "react";
import Drawer from "./Drawer";
import styles from "./styles.module.scss";

const Navigation = () => {
	const [showDrawer, setShowDrawer] = useState(false);

	const handleDrawer = () => {
		setShowDrawer(!showDrawer);
	};

	return (
		<>
			<nav className={styles.nav}>
				<div className="d-flex align-items-center">
					<div className={styles.menu} onClick={(e) => handleDrawer()}>
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
								d="M7 10C6.44772 10 6 10.4029 6 10.9C6 11.3971 6.44772 11.8 7 11.8H25C25.5523 11.8 26 11.3971 26 10.9C26 10.4029 25.5523 10 25 10H7ZM7 19.8C6.44772 19.8 6 20.203 6 20.7C6 21.1971 6.44772 21.6 7 21.6H25C25.5523 21.6 26 21.1971 26 20.7C26 20.203 25.5523 19.8 25 19.8H7Z"
								fill="white"
							/>
						</svg>
					</div>
					<img
						src="/img/logo.png"
						width="100%"
						className="d-none d-md-block"
						height="21"
					/>
				</div>
				<div className="d-md-none">
					<img src="/img/logo.png" width="100%" height="21" />
				</div>
				<div>
					<ul
						className={`m-0 p-0 d-md-flex align-items-center ${styles.links}`}
					>
						<li>
							<Link href="/">
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
											d="M17.9302 5.49145C16.5557 4.83618 14.9444 4.83618 13.5699 5.49145C12.2581 6.11682 11.3018 7.27289 10.9568 8.64545H6.76632C6.35126 8.64545 6 8.97255 6 9.39422V26.7512C6 26.9527 6.083 27.1441 6.22756 27.2837C6.37182 27.4231 6.56581 27.5 6.76632 27.5H24.7337C24.9342 27.5 25.1282 27.4231 25.2724 27.2837C25.417 27.1441 25.5 26.9527 25.5 26.7512V9.39422C25.5 8.97261 25.1489 8.64545 24.7338 8.64545H20.5433C20.1983 7.27289 19.242 6.11686 17.9302 5.49145ZM13.6657 7.18891C14.261 6.74255 14.9941 6.49885 15.7499 6.49748C16.5057 6.49882 17.2387 6.74254 17.8341 7.18891C18.3388 7.56732 18.7201 8.0729 18.9387 8.64549H12.561C12.7797 8.07292 13.161 7.56731 13.6657 7.18891ZM12.3482 13V10.1429H19.1514V13C19.1514 13.4216 19.5029 13.7486 19.9177 13.7486C20.3327 13.7486 20.684 13.4216 20.684 13V10.1429H23.9674L23.9674 26.0022H7.53238V10.1429H10.8157V12.9998C10.8157 13.4212 11.1666 13.7486 11.5818 13.7486C11.9966 13.7486 12.3482 13.4216 12.3482 13Z"
											fill="white"
										/>
									</svg>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<svg
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className={styles.iconUser}
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
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className={styles.link}> take the assessment</a>
							</Link>
						</li>
					</ul>
				</div>
				<Drawer showDrawer={showDrawer} handleDrawer={handleDrawer} />
			</nav>
		</>
	);
};

export default Navigation;
