import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../public/css/global.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
					<meta
						name="description"
						content="Lisander Lopez's Personal Portfolio site based on Windows Desktop UI."
					/>
					<meta name="viewport" content="width=device-width, initial-scale=1" />

					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
						rel="stylesheet"
					/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
