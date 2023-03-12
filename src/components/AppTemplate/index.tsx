import { ReactNode } from "react";
import { Container, Content } from "./styles";
import SideMenu from "../SideMenu";

interface AppTemplateProps {
	children: ReactNode;
}

const AppTemplate = ({ children }: AppTemplateProps) => {
	return (
		<Container>
			<SideMenu />
			<Content>{children}</Content>
		</Container>
	);
};

export default AppTemplate;
