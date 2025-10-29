import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";
import type { NextRequest } from "next/server";

const isPublicPage = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware(async (request: NextRequest) => {
  const isPublic = isPublicPage(request);
  const isAuth = await isAuthenticatedNextjs();

  if (!isPublic && !isAuth) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }
  
  if (isPublic && isAuth) {
    return nextjsMiddlewareRedirect(request,"/");
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
