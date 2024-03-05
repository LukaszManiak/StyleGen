import { Link, useRouteError } from "react-router-dom";
import GoBackButton from "./GoBackLink";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

function Error() {
  return (
    <>
      <Header />
      <div className="mb-36 w-full px-10  py-44 md:py-64">
        <GoBackButton />
        <p className="mt-10 w-full text-center text-3xl">
          We couldn't find the page you were looking for. This is either
          because:
          <br />
          <span className="text-accent">
            -You made a mistake in the URL entered into your browser. Please
            check the URL and try again.
          </span>{" "}
          <br />{" "}
          <span className="text-accent">
            -The page you are looking for has been moved or deleted.
          </span>{" "}
          <br /> You can return to homepage by clicking{" "}
          <Link className="text-primary" to={"/"}>
            here
          </Link>
          .
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Error;
