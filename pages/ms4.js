import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import BlockTextFive from "./components/BlockTextFive";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";
import { getData } from "../utils/utils";

const PhenelogyFour = () => {
	const [data, setData] = useState(undefined);

	useEffect(() => {
		getData("ms4").then((response) => setData(response[0]["ms4"]));
	}, []);

	return (
		<>
			<Layout title={"Menopause - Retargeting"}>
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

export default PhenelogyFour;
