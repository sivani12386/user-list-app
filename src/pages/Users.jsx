import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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
  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>
      <input
  className="search-box"
  type="text"
  placeholder="Search users..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      <h1>👥 User List</h1>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        filteredUsers.length > 0 ? (
  filteredUsers.map((user) => (
    <div key={user.id} className="user-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <hr />
    </div>
  ))
) : (
  <p>No users found</p>
)
      )}
    </div>
  );
}