import { Container } from "./styles";

import searchIcon from "../../assets/search.png";
import Image from "next/image";

const SearchBar = () => {
	return (
		<Container>
			<input type="search" placeholder="Pesquisar" />
			<Image src={searchIcon} alt="Search" width={12} />
		</Container>
	);
};

export default SearchBar;
