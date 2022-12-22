
"use client";

import { useSession, signIn, signOut } from "next-auth/react"


export default function LoginButton({ children }) {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br />
        Ganze OBject: {JSON.stringify(session)} <br />
        Access Token: {session.accessToken} <br /> */}
        {/* <UserInformation data={session.user} /> */}
        <button 
        onClick={() => signOut()}>Sign out
                    
        </button>
        {children}
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-700 border border-transparent rounded-md shadow-sm hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2"
      onClick={() => signIn()}>Sign in</button>
    </>
  );
}