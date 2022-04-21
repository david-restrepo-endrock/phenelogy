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
	return (
		<Layout title="Home">
			<Banner />
			<BlockTextOne />
			<BlockTextTwo />
			<BlockTextFour />
			<CustomerFavorites />
			<BlockTextThird />
			<BlockAbout />
		</Layout>
	);
};

export default Home;
