import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
      setLoading(false);
    }

    getUsers();
  }, []);

  return (
    <div>
      <h1>👥 User List</h1>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}