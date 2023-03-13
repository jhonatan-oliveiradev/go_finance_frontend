import styled from "styled-components";

export const Container = styled.div`
	display: inline-block;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	border: 0.3rem solid ${({ theme }) => theme.colors.white};
	border-color: ${({ theme }) => theme.colors.white} transparent
		${({ theme }) => theme.colors.white} transparent;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
