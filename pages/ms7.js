import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import BlockAbout from "./components/BlockAbout";
import BlockTextOne from "./components/BlockTextOne";
import BlockTextThird from "./components/BlockTextThird";
import BlockTextTwo from "./components/BlockTextTwo";
import BlockTextFour from "./components/BlockTextFour";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";

const PhenelogySeven = ({ info }) => {
	const [data, setData] = useState(undefined);

	useEffect(() => {
		setData(info[0].ms7);
	}, []);

	return (
		<Layout title="Menopause">
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
	const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/data.json`);
	const data = await response.json();

	return {
		props: {
			info: data,
		},
	};
}

export default PhenelogySeven;
