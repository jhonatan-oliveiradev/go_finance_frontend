import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme.colors.black700};
	color: ${(props) => props.theme.colors.white};
	border-radius: 0.25rem;
	padding: 0.5rem 1rem;

	img {
		cursor: pointer;
	}
`;
