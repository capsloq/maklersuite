
"use client";

import { useSession, signIn, signOut } from "next-auth/react"


export default function LoginButton({ children }) {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        Ganze OBject: {JSON.stringify(session)} <br />
        Access Token: {session.accessToken} <br />
        {/* <UserInformation data={session.user} /> */}
        <button onClick={() => signOut()}>Sign out</button>
        {children}
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}