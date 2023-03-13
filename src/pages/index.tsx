import Card from "@/components/Card";
import Chart from "@/components/Chart";
import { Container, RightSide } from "../styles/home/home.styles";
import TableContainer from "@/components/TableContainer";
import TableDetails from "@/components/TableDetails";
import TableLine from "@/components/TableLine";

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

const TableData = [
	{
		title: "Título 1",
		description: "Descrição 1",
	},
	{
		title: "Título 2",
		description: "Descrição 2",
	},
	{
		title: "Título 3",
		description: "Descrição 3",
	},
	{
		title: "Título 4",
		description: "Descrição 4",
	},
	{
		title: "Título 5",
		description: "Descrição 5",
	},
];

const Home = () => {
	return (
		<>
			<Container>
				{/* <Chart />
				<RightSide>
					{cardData.map((card) => (
						<Card key={card.title} title={card.title} value={card.value} />
					))}
					<button>Download</button>
				</RightSide> */}
				<TableContainer>
					<TableDetails>
						{TableData.map((data) => (
							<TableLine
								key={data.title}
								title={data.title}
								description={data.description}
							/>
						))}
					</TableDetails>
				</TableContainer>
			</Container>
		</>
	);
};

export default Home;
