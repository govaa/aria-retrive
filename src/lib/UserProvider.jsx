// ** React Imports
import { createContext, useContext, useEffect, useState } from "react";
// ** Next Import

import { useSession, signIn, signOut } from "next-auth/react";

import toast from "react-hot-toast";
import { useRouter } from "next/router";
const AuthUserContext = createContext({
  user: null,
  loading: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});
const AuthenticationContext = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  //! States
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!session && status !== "loading") {
      setUser(null);
      setLoading(false);
    }
    if (session) {
      setUser(session.user);

      setLoading(false);
    }
  }, [session, status]);

  //! Login
  async function handleLogin(params, errorCallback) {
    setLoading(true);
    if (session) {
      await signOut({ redirect: false });
    }
    try {
      const { email, password } = params;

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.status !== 200) {
        throw new Error(result.error);
      }
      if (session) {
        setUser(session.user);
      }
      router.replace("/cms-dashboard").then((e) => {
        console.log(e, "Done");
      });
    } catch (error) {
      if (errorCallback) {
        errorCallback(error);
      }
    } finally {
      setLoading(false);
    }
  }
  //! Logout
  async function handleLogout() {
    try {
      setLoading(true);
      await signOut({ redirect: false });
      setUser(null);
      if (router.pathname.includes("/cms")) {
        router.replace("/");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };
  return (
    <AuthUserContext.Provider value={values}>
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuth = () => useContext(AuthUserContext);

export default AuthenticationContext;
