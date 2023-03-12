/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from "next/app";
import { darkTheme } from "@/styles/themes/dark";
import AppTemplate from "@/components/AppTemplate";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/global";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={darkTheme}>
			<Head>
				<title>Go Finance | Suas finanças em um só lugar.</title>
				<link rel="icon" href="../../public/favicon.ico" type="image/x-icon" />
				<meta
					name="description"
					content="Acesse sua conta e veja suas finanças em um só lugar."
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<GlobalStyles />
			<AppTemplate>
				<Component {...pageProps} />
			</AppTemplate>
		</ThemeProvider>
	);
}
