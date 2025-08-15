import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  if (!users.length) return <h1>Loading...</h1>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home</h1>
        {users.map(user => (
          <article key={user.id}>
            <h2>
              <Link to={`/profile/${user.id}`}>{user.name}</Link>
            </h2>
            <p>{user.bio?.slice(0, 50)}...</p>
          </article>
        ))}
      </main>
    </>
  );
}

export default Home;
