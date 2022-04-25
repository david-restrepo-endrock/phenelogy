import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import BlockTextFive from "./components/BlockTextFive";
import CustomerFavorites from "./components/CustomerFavorites";
import Layout from "./components/Layout";
import { getData } from "../utils/utils";

const PhenelogySix = () => {
	const [data, setData] = useState(undefined);

	useEffect(() => {
		getData("ms6").then((response) => setData(response[0]["ms6"]));
	}, []);

	return (
		<>
			<Layout title={"Comprehensive - Retargeting"}>
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

export default PhenelogySix;
