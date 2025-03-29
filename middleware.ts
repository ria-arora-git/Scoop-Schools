import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) return; // Allow public routes
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Protects all routes except assets
};
