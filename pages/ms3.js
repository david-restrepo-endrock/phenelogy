import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import BlockAbout from "./components/BlockAbout";
import BlockTextOne from "./components/BlockTextOne";
import BlockTextThird from "./components/BlockTextThird";
import BlockTextTwo from "./components/BlockTextTwo";
import BlockTextFour from "./components/BlockTextFour";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";
import { getData } from "../utils/utils";

const PhenelogyThird = () => {
	const [data, setData] = useState(undefined);

	useEffect(() => {
		getData("ms3").then((response) => setData(response[0]["ms3"]));
	}, []);

	return (
		<Layout title="Comprehensive">
			{data !== undefined && (
				<>
					<Banner info={data.banner} />
					<BlockTextOne info={data.blockTextOneInfo} />
					<BlockTextTwo info={data.blockTextTwoInfo} />
					<BlockTextFour />
					<CustomerFavorites info={data.customerFavorite} />
					<BlockTextThird info={data.blockTextThird} />
					<BlockAbout info={data.blockAbout} />
				</>
			)}
		</Layout>
	);
};

export default PhenelogyThird;
