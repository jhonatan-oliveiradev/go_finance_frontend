import { Container } from "./styles";

const DateInput = ({ title }: { title: string }) => {
	return (
		<Container>
			<h2>{title}</h2>
			<input type="date" />
		</Container>
	);
};

export default DateInput;
