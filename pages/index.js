import React from "react";
import Banner from "./components/Banner";
import BlockTextOne from "./components/BlockTextOne";
import BlockTextThird from "./components/BlockTextThird";
import BlockTextTwo from "./components/BlockTextTwo";
import Brands from "./components/Brands";
import Layout from "./components/Layout";

const Home = () => {
	return (
		<Layout title="Home">
			<Banner />
			<BlockTextOne />
			<BlockTextTwo />
			<Brands />
			<BlockTextThird />
		</Layout>
	);
};

export default Home;
