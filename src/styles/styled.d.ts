import styled from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		title: string;
		colors: {
			primary: string;
			secondary: string;
			tertiary: string;
			black900: string;
			black800: string;
			black700: string;
			white: string;
		};
	}
}
