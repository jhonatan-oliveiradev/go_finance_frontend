import Card from "@/components/Card";
import Chart from "@/components/Chart";
import { Container, RightSide } from "./styles";

const cardData = [
	{
		title: "Saldo a pagar:",
		value: "10.000,00",
	},
	{
		title: "Saldo a receber:",
		value: "20.000,00",
	},
	{
		title: "Saldo total:",
		value: "30.000,00",
	},
];

const Home = () => {
	return (
		<>
			<Container>
				<Chart />
				<RightSide>
					{cardData.map((card) => (
						<Card key={card.title} title={card.title} value={card.value} />
					))}
					<button>Download</button>
				</RightSide>
			</Container>
		</>
	);
};

export default Home;
