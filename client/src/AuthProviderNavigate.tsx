import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const AuthProviderNavigate = ({ children }: any) => {
  const navigate = useNavigate();

  const onreidirectCallback = (appState: any) => {
    navigate(appState.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      domain={`${process.env.REACT_APP_DOMAIN}`}
      clientId={`${process.env.REACT_APP_CLIENT_ID}`}
      authorizationParams={{
        redirect_uri: "https://localhost:3000/callback",
      }}
      onRedirectCallback={onreidirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
