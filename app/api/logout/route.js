import { NextResponse } from "next/server";

export async function POST(req) {
  const response = NextResponse.json({
    message: "Logged out !",
    status: true,
  });
  response.cookies.set("authToken", "", {
    expiresIn: new Date(0),
  });
  return response;
}
