import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	width: 50%;
	height: 70%;
	background-color: ${(props) => props.theme.colors.black900};
	border-radius: 1rem;
	box-shadow: 0 0 14px ${(props) => props.theme.colors.black900};

	img {
		margin-bottom: 2rem;
	}

	input {
		width: 60%;
		height: 4rem;
		border-radius: 0.5rem;
		font-size: 1.25rem;

		&::placeholder {
			font-size: 1.25rem;
		}
	}

	button {
		width: 60%;
	}

	p {
		color: ${(props) => props.theme.colors.white};

		a {
			color: ${(props) => props.theme.colors.primary};
			text-decoration: none;
			transition: all 0.3s ease-in-out;

			&:hover {
				color: ${(props) => props.theme.colors.secondary};
			}
		}
	}
`;
