import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLogin } from "@/providers/auth";
import { Container, Content } from "../../styles/auth/auth.styles";

import logo from "../../assets/logo.svg";

const SignIn = () => {
	const { login } = useLogin();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		login({ username, password });
	};

	return (
		<Container>
			<Content>
				<Image
					src={logo}
					alt="GoFinance"
					title="GoFinance | Suas finanças em um só lugar."
					width={150}
				/>
				<input
					type="text"
					placeholder="Nome de usuário"
					title="Digite seu usuário"
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
				<input
					type="password"
					placeholder="Senha"
					title="Digite sua senha"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button onClick={handleLogin}>Entrar</button>
				<p>
					Ainda não possui uma conta? <Link href="/SignUp">Cadastre-se!</Link>
				</p>
			</Content>
		</Container>
	);
};

export default SignIn;
