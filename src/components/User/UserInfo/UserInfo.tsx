const UserInfo = ({
  user,
}: {
  user: { name: string; citizenId: string; email: string; phone: string };
}) => {
  return (
    <div className="mt-4 p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-md">
      <h2 className="text-xl font-semibold">Your Information</h2>
      <p>
        <strong>Citizen ID:</strong> {user.citizenId}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  );
};

export default UserInfo;
