import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const usersFile = path.join(process.cwd(), "users.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, name, email, password, dob, phone, address, atm } = body;

    if (!id || !name || !email || !password || !dob || !phone || !address || !atm) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    let users = [];
    if (fs.existsSync(usersFile)) {
      users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
    }

    if (users.find((user: any) => user.email === email || user.id === id)) {
      return NextResponse.json({ message: "User already exists!" }, { status: 400 });
    }

    users.push({ id, name, email, password, dob, phone, address, atm });
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

    return NextResponse.json({ message: "Successfully registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
