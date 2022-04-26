import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import BlockTextFive from "./components/BlockTextFive";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";
import { info } from "../data";

const PhenelogyTwelve = ({ data }) => {
	return (
		<>
			<Layout title={"Menopause - Retargeting"}>
				<Banner info={data?.banner} />
				<CustomerFavorites info={data?.customerFavorite} />
				<BlockTextFive info={data?.blockTextFive} />
			</Layout>
		</>
	);
};

export async function getServerSideProps() {
	return {
		props: {
			data: info[0]?.ms6,
		},
	};
}

export default PhenelogyTwelve;
