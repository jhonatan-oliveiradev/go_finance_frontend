import styled from "styled-components";

export const Container = styled.div`
	background-color: ${(props) => props.theme.colors.black900};
	width: 23.3125rem;
	height: 11.0625rem;
	border-radius: 0.5rem;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);

	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;

	h1 {
		color: ${(props) => props.theme.colors.primary};
		font-size: 1.875rem;
	}

	p {
		color: ${(props) => props.theme.colors.white};
		font-size: 1.75rem;
	}
`;

export const ValueLabel = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;
