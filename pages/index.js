import React from "react";
import Banner from "./components/Banner";
import BlockAbout from "./components/BlockAbout";
import BlockTextOne from "./components/BlockTextOne";
import BlockTextThird from "./components/BlockTextThird";
import BlockTextTwo from "./components/BlockTextTwo";
import Brands from "./components/Brands";
import CustomerFavorites from "./components/CustomerFavorites";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const Home = () => {
	return (
		<Layout title="Home">
			<Banner />
			<BlockTextOne />
			<BlockTextTwo />
			<Brands />
			{/* <CustomerFavorites />  */}
			<BlockTextThird />
			<BlockAbout />
			<Footer />
		</Layout>
	);
};

export default Home;
