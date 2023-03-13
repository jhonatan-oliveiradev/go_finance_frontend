import { ReactNode } from "react";
import { Container } from "./styles";
import TableNavbar from "../TableNavbar";

interface TableContainerProps {
	children: ReactNode;
}

const TableContainer = ({ children }: TableContainerProps) => {
	return (
		<Container>
			<TableNavbar />
			{children}
		</Container>
	);
};

export default TableContainer;
