import { Link } from "react-router-dom";

function GoBackLink() {
  return (
    <Link
      className="w-full px-12 transition-all ease-in-out hover:px-6 hover:font-bold"
      to="/"
    >
      👈🏼 Go back
    </Link>
  );
}

export default GoBackLink;
