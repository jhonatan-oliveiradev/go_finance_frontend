import styled from "styled-components";

export const Container = styled.div`
	background-color: ${(props) => props.theme.colors.black900};
	width: 5rem;
	height: 100%;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		position: absolute;
		top: 1.5rem;
	}
`;

export const MenuItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	align-items: center;

	a {
		position: relative;
	}
`;
