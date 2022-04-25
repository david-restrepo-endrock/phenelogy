import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import BlockTextFive from "./components/BlockTextFive";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";
import { getData } from "../utils/utils";

const PhenelogyFive = () => {
	const [data, setData] = useState(undefined);

	useEffect(() => {
		getData("ms5").then((response) => setData(response[0]["ms5"]));
	}, []);

	return (
		<>
			<Layout title={"Personalization - Retargeting"}>
				{data !== undefined && (
					<>
						<Banner info={data.banner} />
						<CustomerFavorites info={data.customerFavorite} />
						<BlockTextFive info={data.blockTextFive} />
					</>
				)}
			</Layout>
		</>
	);
};

export default PhenelogyFive;
