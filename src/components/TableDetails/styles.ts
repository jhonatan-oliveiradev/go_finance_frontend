import styled from "styled-components";

export const Container = styled.div`
	border-radius: 0.5rem;
	margin-top: 2rem;
`;

export const Header = styled.div`
	background-color: ${(props) => props.theme.colors.black700};
	box-shadow: 0 0 14px ${(props) => props.theme.colors.black900};
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 3rem;

	h2 {
		color: ${(props) => props.theme.colors.primary};
		font-size: 1rem;
		padding-left: 1.25rem;

		&:nth-child(2) {
			width: 60%;
		}
	}
`;

export const Body = styled.div`
	background-color: ${(props) => props.theme.colors.black700};
	box-shadow: 0 0 14px ${(props) => props.theme.colors.black900};
	width: 100%;
	padding-top: 0.875rem;
	margin-top: 0.25rem;
`;
