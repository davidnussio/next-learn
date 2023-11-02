import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log("authorized", !!auth?.user, nextUrl);
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) {
          console.log("<- isOnDashboard && isLoggedIn", nextUrl);
          return true;
        }
        console.log("<- isOnDashboard && !isLoggedIn", nextUrl);
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      console.log("<- !isOnDashboard && !isLoggedIn", nextUrl);
      return true;
    },
  },
} satisfies NextAuthConfig;
