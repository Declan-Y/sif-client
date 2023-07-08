import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return (
      <button
        onClick={() =>
          loginWithRedirect({
            appState: {
              returnTo: "/profile",
            },
          })
        }
      >
        Log In
      </button>
    );
  } else {
    return (
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    );
  }
};

export default LoginButton;
