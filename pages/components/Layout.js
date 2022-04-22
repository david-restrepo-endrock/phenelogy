import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navigation from "./Navigation";

const Layout = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>Phenelogy - {title} </title>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
					crossorigin="anonymous"
				/>
			</Head>
			<Navigation />
			<div>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
