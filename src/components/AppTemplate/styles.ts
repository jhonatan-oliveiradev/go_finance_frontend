import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100vw;
	height: 100vh;
`;

export const Content = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${(props) => props.theme.colors.black800};
`;
