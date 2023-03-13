/* eslint-disable react-hooks/exhaustive-deps */
import api from "@/services/api";
import router from "next/router";
import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

type AuthProviderProps = {
	children: ReactNode;
};

type LoginCredentials = {
	username: string;
	password: string;
};

type AuthContextData = {
	login(credentials: LoginCredentials): Promise<void>;
	logout(): void;
};

type AuthState = {
	token: string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [origin, setOrigin] = useState("/");
	const [data, setData] = useState<AuthState | undefined>(() => {
		if (typeof window === "undefined") return {} as AuthState;
		const token = localStorage.getItem("@gofinance:token");
		if (token) {
			api.defaults.headers.authorization = `Bearer ${token}`;
			return { token };
		}
	});

	useEffect(() => {
		if (
			!data?.token &&
			router.pathname !== "/SignIn" &&
			router.pathname !== "/SignUp"
		) {
			setOrigin(router.pathname);
			router.replace("/SignIn");
		}
	}, [data, router]);

	const login = useCallback(
		async ({ username, password }: LoginCredentials) => {
			const res = await api.post("/login", {
				username,
				password,
			});
			const accessToken = res.data;
			localStorage.setItem("@gofinance:token", accessToken);
			api.defaults.headers.authorization = `Bearer ${accessToken}`;
			router.replace(origin);
			if (!accessToken) {
				setData(undefined);
			}
			setData({ token: accessToken });
		},
		[origin, router]
	);

	const logout = useCallback(() => {
		localStorage.removeItem("@gofinance:token");
		delete api.defaults.headers.authorization;
		setData(undefined);
	}, []);

	return (
		<AuthContext.Provider value={{ login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

const useLogin = (): AuthContextData => {
	const context = useContext(AuthContext);
	return context;
};

export { AuthProvider, useLogin };
