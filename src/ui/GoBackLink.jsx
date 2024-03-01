import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-12">
      <button
        className="px-0 transition-all ease-in-out hover:px-6 hover:font-bold"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default GoBackButton;
