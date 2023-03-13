import styled from "styled-components";

export const Container = styled.div`
	background-color: ${(props) => props.theme.colors.black900};
	padding: 1.675rem;
	border-radius: 0.5rem;
	box-shadow: 0 0 14px ${(props) => props.theme.colors.black900};
`;
