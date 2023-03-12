import { ReactNode } from "react";
import { Container, Content } from "./styles";
import SideMenu from "../SideMenu";
import { useRouter } from "next/router";

interface AppTemplateProps {
	children: ReactNode;
}

const AppTemplate = ({ children }: AppTemplateProps) => {
	const route = useRouter();

	const isAuthPage =
		route.pathname === "/SignIn" || route.pathname === "/SignUp";

	return (
		<Container>
			{!isAuthPage && <SideMenu />}
			<Content>{children}</Content>
		</Container>
	);
};

export default AppTemplate;
