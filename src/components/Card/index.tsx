import { Container, ValueLabel } from "./styles";

import valueIcon from "../../assets/value-icon.png";
import Image from "next/image";

interface CardProps {
	title: string;
	value: string;
}

const Card = ({ title, value }: CardProps) => {
	return (
		<Container>
			<h1>{title}</h1>
			<ValueLabel>
				<Image src={valueIcon} alt="ícone de cifrão" width={41} />
				<p>R$ {value}</p>
			</ValueLabel>
		</Container>
	);
};

export default Card;
