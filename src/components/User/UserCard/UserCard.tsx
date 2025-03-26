const UserCard = ({
  user,
}: {
  user: { name: string; citizenId: string; email: string };
}) => {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-md">
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p>
        <strong>ID:</strong> {user.citizenId}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default UserCard;
