import { AuthContextData } from "@/types/auth";
import { createContext } from "react";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
