import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import BlockTextFive from "./components/BlockTextFive";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";


const PhenelogyFour = ({ info }) => {
	const [data, setData] = useState(undefined);

	useEffect(() => {
		setData(info[0].ms4);
	}, []);

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
	const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/data.json`);
	const data = await response.json();

	return {
		props: {
			info: data,
		},
	};
}

export default PhenelogyFour;
