import React from "react";
import Banner from "./components/Banner";
import BlockAbout from "./components/BlockAbout";
import BlockTextOne from "./components/BlockTextOne";
import BlockTextThird from "./components/BlockTextThird";
import BlockTextTwo from "./components/BlockTextTwo";
import BlockTextFour from "./components/BlockTextFour";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";

const PhenelogyTwo = () => {
	const bannerInfo = {
		title: "Menopause can be complicated, finding relief doesn’t have to be.",
		text: "Phenology delivers timely relief and expert guidance through each stage and symptom of menopause.",
		layout: "phenelogy-two",
		buttonText: "Find Relief",
		buttonLink: "/",
		backgroundColor: "backgound-two",
		whiteTextColor: false,
	};

	const blockTextOneInfo = {
		backgroundColor: "background-green",
		iconColor: "#00552B",
		textIconColor: "green",
	};

	const blockTextThird = {
		image: "/img/image-women-2.png",
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

export default PhenelogyTwo;
