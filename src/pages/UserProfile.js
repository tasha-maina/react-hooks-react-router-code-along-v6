import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function UserProfile() {
  const [user, setUser] = useState(null); 
  const { id } = useParams(); 

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!user) return <h1>Loading...</h1>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Location:</strong> {user.location}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
        <p><strong>Favorite Books:</strong></p>
        <ul>
          {user.favoriteBooks.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default UserProfile;
