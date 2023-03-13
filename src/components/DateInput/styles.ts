import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	h2 {
		color: ${(props) => props.theme.colors.primary};
		font-size: 1.25rem;
	}
`;
