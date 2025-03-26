import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const usersFile = path.join(process.cwd(), "users.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    if (!fs.existsSync(usersFile)) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
