import React from "react";
import Banner from "./components/Banner";
import BlockTextFive from "./components/BlockTextFive";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";

const PhenelogySix = () => {
	const bannerInfo = {
		title: "Holistic solutions, backed by science",
		text: "Phenology offers simple solutions to the complexities of menopause, including daily supplements from naturally-sourced ingredients, the first at-home hormone tracking kit, and other health, nutrition, and beauty products and services designed for holistic relief and support when you need it.",
		layout: "phenelogy-six",
		buttonText: "Learn more",
		buttonLink: "/",
		backgroundColor: "",
		whiteTextColor: false,
	};

	const blockTextFive = {
		showCompleteBlock: true,
	};

	return (
		<>
			<Layout title={"Menopause"}>
				<Banner info={bannerInfo} />
				<CustomerFavorites />
				<BlockTextFive info={blockTextFive} />
			</Layout>
		</>
	);
};

export default PhenelogySix;
