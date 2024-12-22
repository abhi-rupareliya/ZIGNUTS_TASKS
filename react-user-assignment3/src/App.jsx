import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      data = data.map((user) => {
        return { ...user, isLiked: false };
      });
      setUsers(data);
    }

    fetchData();
  }, []);

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const updateUser = (id) => {
    return (updatedData) => {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, ...updatedData } : user
        )
      );
    };
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            updateUser={updateUser(user.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
