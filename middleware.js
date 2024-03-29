import { NextResponse } from "next/server";

export function middleware(request) {
  const authToken = request.cookies.get("authToken")?.value;

  if (!authToken) {
    return NextResponse.json({
      message: "user not logged in",
    });
  }
  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/sign_up"
  ) {
    return;
  }
  if (
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/sign_up"
  ) {
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (
    request.nextUrl.pathname === "/addTask" ||
    request.nextUrl.pathname === "/showTask" ||
    request.nextUrl.pathname === "/api/currentuser"
  ) {
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/addTask", "/showTask", "/login", "/sign_up"],
};
