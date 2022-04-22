import React from "react";
import Banner from "./components/Banner";
import BlockAbout from "./components/BlockAbout";
import BlockTextOne from "./components/BlockTextOne";
import BlockTextThird from "./components/BlockTextThird";
import BlockTextTwo from "./components/BlockTextTwo";
import BlockTextFour from "./components/BlockTextFour";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";

const Home = () => {
	const bannerInfo = {
		title: "Science-backed, naturally-sourced menopause relief",
		text: "Phenology helps women feel their best with a scientifically proven, holistic approach to understanding and managing menopause, naturally.",
		layout: "phenelogy-first",
		buttonText: "Learn More",
		buttonLink: "/",
		backgroundColor: "backgound-primary",
		whiteTextColor: true,
	};

	const blockTextOneInfo = {
		backgroundColor: "background-second",
		iconColor: "#4F0D31",
		isFirstLanding: true
	};

	const blockTextThird = {
		image: "/img/image-women.png",
	};

	return (
		<Layout title="Home">
			<Banner info={bannerInfo} />
			<BlockTextOne info={blockTextOneInfo} />
			<BlockTextTwo />
			<BlockTextFour />
			<CustomerFavorites />
			<BlockTextThird info={blockTextThird} />
			<BlockAbout />
		</Layout>
	);
};

export default Home;
