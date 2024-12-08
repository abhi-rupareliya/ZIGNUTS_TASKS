import { useState, useEffect } from 'react'
import ProfileCard from './components/ProfileCard'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    }

    fetchData()
  }, [])

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            profileData={user}
            deleteUser={deleteUser}
          />
        ))}
      </div>
    </>
  )
}

export default App
