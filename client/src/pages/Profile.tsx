import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { isAuthenticated } = useAuth0();

  console.log(isAuthenticated);
  return <h1>Profile</h1>;
};
