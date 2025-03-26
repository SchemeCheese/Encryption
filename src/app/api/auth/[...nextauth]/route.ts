import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import fs from "fs";
import path from "path";

const usersFile = path.join(process.cwd(), "users.json");

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        console.log("Received credentials:", credentials);

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        if (!fs.existsSync(usersFile)) {
          throw new Error("User database not found");
        }

        const users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
        const user = users.find((u: any) => u.email === credentials.email);

        if (!user || user.password !== credentials.password) {
          console.log("Invalid email or password");
          throw new Error("Invalid email or password");
        }

        console.log("User authenticated:", user);
        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  pages: { signIn: "/signin" },
  session: { strategy: "jwt" as const }, // 🔥 Fix lỗi TypeScript
};

// Xuất API handler cho NextAuth
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
