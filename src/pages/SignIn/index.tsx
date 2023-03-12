import Image from "next/image";
import Link from "next/link";
import { Container, Content } from "./styles";

import logo from "../../assets/logo.svg";

const SignIn = () => {
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
				/>
				<input type="password" placeholder="Senha" title="Digite sua senha" />
				<button>Entrar</button>
				<p>
					Ainda não possui uma conta? <Link href="/SignUp">Cadastre-se!</Link>
				</p>
			</Content>
		</Container>
	);
};

export default SignIn;
