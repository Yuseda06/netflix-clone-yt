import React, { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

async function HomeLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }

  return <div>{children}</div>;
}

export default HomeLayout;
