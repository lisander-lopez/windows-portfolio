import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
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
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
