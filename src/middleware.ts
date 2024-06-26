import { auth } from "@/app/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith("/admin")) {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});
