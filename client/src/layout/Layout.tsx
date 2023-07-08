import LoginButton from "../login";

export const Layout = ({ children }: any) => {
  return (
    <>
      <div>
        <LoginButton />
      </div>
      <div>{children}</div>
    </>
  );
};
