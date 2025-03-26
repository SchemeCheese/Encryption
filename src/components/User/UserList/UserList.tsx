import UserCard from "../UserCard/UserCard";

const UserList = ({
  users,
}: {
  users: { name: string; citizenId: string; email: string }[];
}) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">All Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
