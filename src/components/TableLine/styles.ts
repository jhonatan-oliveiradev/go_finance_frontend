import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.25rem;

	span {
		font-size: 1rem;
		margin-bottom: 1rem;
		width: 15.625rem;
		padding-left: 1.25rem;

		&:nth-child(2) {
			width: 75%;
		}
	}

	img {
		margin-right: 1rem;
		margin-bottom: 1.25rem;
		cursor: pointer;
	}
`;
