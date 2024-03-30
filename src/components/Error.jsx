import { useRouteError } from "react-router-dom";
import error from "../assets/error.png";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex justify-center py-48">
      <img src={error} alt="error img" />
    </div>
  );
};

export default Error;
