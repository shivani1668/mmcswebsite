import { auth } from "@/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  const isAdminRoute = nextUrl.pathname.startsWith("/admin");
  const isAuthRoute = nextUrl.pathname.startsWith("/login");

  if (isAdminRoute) {
    if (isLoggedIn) return;
    return Response.redirect(new URL("/login", nextUrl));
  }

  if (isAuthRoute) {
    if (isLoggedIn) return Response.redirect(new URL("/admin", nextUrl));
    return;
  }

  return;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
