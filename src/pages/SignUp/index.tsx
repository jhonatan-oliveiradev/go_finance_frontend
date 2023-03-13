import Image from "next/image";
import Link from "next/link";
import { Container, Content } from "../../styles/auth/auth.styles";

import logo from "../../assets/logo.svg";

const SignUp = () => {
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
				<input type="email" placeholder="E-mail" title="Digite seu e-mail" />
				<input type="password" placeholder="Senha" title="Digite sua senha" />
				<input
					type="password"
					placeholder="Confirme sua senha"
					title="Confirme sua senha"
				/>
				<button>Cadastrar</button>
				<p>
					Já possui uma conta? <Link href="/SignIn">Faça login!</Link>
				</p>
			</Content>
		</Container>
	);
};

export default SignUp;
