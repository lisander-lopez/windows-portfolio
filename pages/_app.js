import Head from "next/head";
import { Fragment } from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "../public/css/global.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
