import React from "react";
import Banner from "./components/Banner";
import BlockTextFive from "./components/BlockTextFive";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";

const PhenelogyFour = () => {
	const bannerInfo = {
		title: "Menopause can be complicated, finding relief doesn’t have to be.",
		text: "Phenology’s daily gummy supplements provides scientifically backed  relief to bothersome menopause symptoms and helps decrease severity of symptoms with its patent pending ingredients.",
		layout: "phenelogy-four",
		buttonText: "Shop Now",
		buttonLink: "/",
		backgroundColor: "backgound-third",
		whiteTextColor: true,
	};

	const blockTextFive = {
		showCompleteBlock: true
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

export default PhenelogyFour;
