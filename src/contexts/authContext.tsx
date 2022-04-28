import React, { useState, createContext, useContext } from "react";
import { AuthContextType } from "./types";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const localStorageUser = localStorage.getItem("authUser");
  const [authUser, setAuthUser] = useState(
    localStorageUser ? JSON.parse(localStorageUser) : null
  );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
