/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useCallback, useEffect, useState } from "react";
import { LoginCredentials } from "@/types/auth";
import AuthContext from "@/utils/context";
import router from "next/router";
import api from "@/services/api";

type AuthProviderProps = {
	children: ReactNode;
};

type AuthState = {
	token: string;
};

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

export default AuthProvider;
