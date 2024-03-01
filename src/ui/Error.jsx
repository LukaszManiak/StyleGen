import { useRouteError } from "react-router-dom";
import GoBackButton from "./GoBackLink";

function Error() {
  const error = useRouteError();

  return (
    <div className="w-full py-24 md:py-52">
      <GoBackButton />
      <p className="w-full text-center text-3xl">
        {error.data || error.message}
      </p>
    </div>
  );
}

export default Error;
