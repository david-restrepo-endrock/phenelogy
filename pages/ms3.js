import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import BlockAbout from "./components/BlockAbout";
import BlockTextOne from "./components/BlockTextOne";
import BlockTextThird from "./components/BlockTextThird";
import BlockTextTwo from "./components/BlockTextTwo";
import BlockTextFour from "./components/BlockTextFour";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";
import { info } from "../data";

const PhenelogyThird = ({ data }) => {
	return (
		<Layout title="Comprehensive">
			<Banner info={data?.banner} />
			<BlockTextOne info={data?.blockTextOneInfo} />
			<BlockTextTwo info={data?.blockTextTwoInfo} />
			<BlockTextFour />
			<CustomerFavorites info={data?.customerFavorite} />
			<BlockTextThird info={data?.blockTextThird} />
			<BlockAbout info={data?.blockAbout} />
		</Layout>
	);
};

export async function getServerSideProps() {
	return {
		props: {
			data: info[0]?.ms3,
		},
	};
}

export default PhenelogyThird;
