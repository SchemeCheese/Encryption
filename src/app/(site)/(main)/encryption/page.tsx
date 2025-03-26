import { getUsers } from "@/lib/getUsers";
import UserInfo from "@/components/User/UserInfo/UserInfo";
import UserList from "@/components/User/UserList/UserList";

const EncryptionPage = () => {
  const users = getUsers();
  const currentUser = users.find((user: any) => user.email === "minhphuonglcby@gmail.com");

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold pt-32">Welcome, {currentUser?.name || "Guest"}!</h1>
      {currentUser && <UserInfo user={currentUser} />}
      <UserList users={users} />
    </div>
  );
};

export default EncryptionPage;
