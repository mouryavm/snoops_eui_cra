/* eslint-disable @typescript-eslint/return-await */
import React, { createContext, useContext } from "react";

/**
 *
 */
export interface AuthContextType {
  isSignIn: boolean;
  logout: () => void;
  login: (email: string, password: string) => boolean;
}

/**
 *
 */
const AuthContext = createContext<AuthContextType>({
  isSignIn: true,
  logout: () => {},
  login: (email: string, password: string) => false,
});

export interface AuthProviderProps extends React.PropsWithChildren {}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isUserSignedIn, setIsUserSignedIn] = React.useState<boolean>(false);

  // look for session on page load, and set state
  React.useEffect(() => {
    if (sessionStorage.getItem("authToken") === "true") {
      setIsUserSignedIn(true);
    }
  }, []);

  /**
   * @description do login
   * @param email
   * @param password
   * @returns
   */
  const login = (email: string, password: string) => {
    if (email == "admin" && password == "admin") {
      sessionStorage.setItem("authToken", "true");
      setIsUserSignedIn(true);
      return true;
    } else {
      setIsUserSignedIn(false);
      sessionStorage.setItem("authToken", "false");
      return false;
    }
  };

  const logout = () => {
    setIsUserSignedIn(false);
    sessionStorage.removeItem("authToken");
  };

  const value: AuthContextType = {
    isSignIn: isUserSignedIn,
    logout: () => logout(),
    login: (email, password) => login(email, password),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 *
 * @returns
 */
export const useAuthContext = () => useContext(AuthContext);
