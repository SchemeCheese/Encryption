import fs from "fs";
import path from "path";

export const getUsers = () => {
  const filePath = path.join(process.cwd(), "users.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};
