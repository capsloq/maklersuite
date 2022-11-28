"use client";

import { SessionProvider, useSession } from "next-auth/react";

export default function Providers({ children }) {
  
  
  return <SessionProvider>{children}</SessionProvider>;
}