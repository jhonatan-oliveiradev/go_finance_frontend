import { ReactNode } from "react";
import { Body, Container, Header } from "./styles";

interface TableDetailsProps {
	children: ReactNode;
}

const TableDetails = ({ children }: TableDetailsProps) => {
	return (
		<Container>
			<Header>
				<h2>Título</h2>
				<h2>Descrição</h2>
				<div></div>
			</Header>
			<Body>{children}</Body>
		</Container>
	);
};

export default TableDetails;
