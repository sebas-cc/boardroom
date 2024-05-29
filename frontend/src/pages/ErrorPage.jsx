import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}

export default ErrorPage;