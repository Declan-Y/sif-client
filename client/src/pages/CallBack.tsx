import { useAuth0 } from "@auth0/auth0-react";

export const CallBack = () => {
  const { isAuthenticated } = useAuth0();

  console.log(isAuthenticated);
  return <h1>Callback</h1>;
};
