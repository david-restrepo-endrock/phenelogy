import React from "react";
import Banner from "./components/Banner";
import BlockAbout from "./components/BlockAbout";
import BlockTextOne from "./components/BlockTextOne";
import BlockTextThird from "./components/BlockTextThird";
import BlockTextTwo from "./components/BlockTextTwo";
import BlockTextFour from "./components/BlockTextFour";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";

const PhenelogyThird = () => {
	const bannerInfo = {
		title: "Holistic solutions, backed by science",
		text: "Phenology helps women feel their best with a scientifically proven, holistic approach to understanding and managing menopause, naturally",
		layout: "phenelogy-third",
		buttonText: "Learn More",
		buttonLink: "/",
		backgroundColor: "backgound-third",
		whiteTextColor: false,
	};

	const blockTextOneInfo = {
		backgroundColor: "background-gold",
		iconColor: "#464E0A",
		textIconColor: "gold",
	};

	const blockTextThird = {
		image: "/img/image-women-3.png",
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

export default PhenelogyThird;
