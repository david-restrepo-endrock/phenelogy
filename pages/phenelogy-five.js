import React from "react";
import Banner from "./components/Banner";
import BlockTextFive from "./components/BlockTextFive";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";

const PhenelogyFive = () => {
	const bannerInfo = {
		title: "Get symptom relief and menopause guidance tailored to you.",
		text: "Take our two-minute menopause assessment to track your journey, get product recommendations and plan for what’s ahead.",
		layout: "phenelogy-five",
		buttonText: "Take the Assessment",
		buttonLink: "/",
		backgroundColor: "backgound-third",
		whiteTextColor: false,
	};

	const blockTextFive = {
		showCompleteBlock: false
	}

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

export default PhenelogyFive;
