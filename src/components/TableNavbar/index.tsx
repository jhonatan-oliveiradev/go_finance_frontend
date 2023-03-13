import DateInput from "../DateInput";
import SearchBar from "../SearchBar";
import { Container, LeftSide } from "./styles";

const TableNavbar = () => {
	return (
		<Container>
			<LeftSide>
				<DateInput title="Data inicial" />
				<DateInput title="Data final" />
				{/* <select name="" id="">
					<option value="">option 1</option>
					<option value="">option 2</option>
				</select> */}
				<SearchBar />
			</LeftSide>
			<button>Adicionar</button>
		</Container>
	);
};

export default TableNavbar;
