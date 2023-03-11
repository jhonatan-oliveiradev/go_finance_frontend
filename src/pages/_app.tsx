import GlobalStyles from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "@/styles/themes/dark";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
