import NavBar from "../components/NavBar";

function ErrorPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </main>
    </>
  );
}

export default ErrorPage;
