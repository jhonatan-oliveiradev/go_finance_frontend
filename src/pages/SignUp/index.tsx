import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Spinner from "@/components/UI/Spinner";

import {
	Container,
	Content,
	ErrorMessage,
} from "../../styles/auth/auth.styles";
import logo from "../../assets/logo.svg";

const SignUp = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const router = useRouter();

	const buttonLabel = isLoading ? <Spinner /> : "Cadastrar";

	const passwordIsValid = password === confirmPassword;
	const emailIsValid = email.includes("@");

	const signUp = async () => {
		try {
			setIsLoading(true);
			if (!passwordIsValid) {
				setHasError(true);
				throw Error();
			}
			await fetch(`http://localhost:8000/user`, {
				method: "POST",
				mode: "no-cors",
				body: JSON.stringify({
					username,
					email,
					password,
				}),
			});
			router.push("/");
		} catch (err) {
			if (!passwordIsValid) {
				setErrorMessage("As senhas devem ser idênticas.");
			}
		} finally {
			setIsLoading(false);
		}
	};

	const inputProps = [
		{
			type: "text",
			placeholder: "Nome de usuário",
			title: "Digite seu usuário",
			setState: setUsername,
		},
		{
			type: "email",
			placeholder: "E-mail",
			title: "Digite seu e-mail",
			setState: setEmail,
		},
		{
			type: "password",
			placeholder: "Senha",
			title: "Digite sua senha",
			setState: setPassword,
		},
		{
			type: "password",
			placeholder: "Confirme sua senha",
			title: "Confirme sua senha",
			setState: setConfirmPassword,
		},
	];

	return (
		<Container>
			<Content>
				<Image
					src={logo}
					alt="GoFinance"
					title="GoFinance | Suas finanças em um só lugar."
					width={150}
				/>
				{inputProps.map((prop) => (
					<input
						key={prop.placeholder}
						type={prop.type}
						placeholder={prop.placeholder}
						title={prop.title}
						onChange={(e) => prop.setState(e.target.value)}
					/>
				))}
				<button onClick={signUp}>{buttonLabel}</button>
				<ErrorMessage>{hasError && errorMessage}</ErrorMessage>
				<p>
					Já possui uma conta? <Link href="/SignIn">Faça login!</Link>
				</p>
			</Content>
		</Container>
	);
};

export default SignUp;
