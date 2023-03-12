import { VictoryPie } from "victory";
import { Container, SubtitleContainer } from "./styles";

const LabelsSubtitle = [
	{
		color: "tomato",
		label: "A pagar",
	},
	{
		color: "orange",
		label: "A receber",
	},
];

const Chart = () => {
	return (
		<Container>
			<VictoryPie
				data={[
					{ x: "A pagar", y: 20 },
					{ x: "A receber", y: 80 },
				]}
				innerRadius={100}
				colorScale={["tomato", "orange"]}
				padAngle={2}
				style={{ labels: { display: "none" } }}
			/>

			{LabelsSubtitle.map((subtitle) => (
				<SubtitleContainer key={subtitle.color} color={subtitle.color}>
					<div />
					{subtitle.label}
				</SubtitleContainer>
			))}
		</Container>
	);
};

export default Chart;
