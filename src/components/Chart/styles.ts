import styled from "styled-components";

interface SubtitleProps {
	color: string;
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	height: 613;
`;

export const SubtitleContainer = styled.div<SubtitleProps>`
	display: flex;
	align-items: center;
	gap: 1rem;

	div {
		background-color: ${(props) => props.color};
		width: 1.875rem;
		height: 1.875rem;
	}
`;
