import { useRouteError, Link } from "react-router";
import error404 from "../assets/error404.svg";
import otherErrors from "../assets/bug.svg";
import { IoReturnUpBackSharp } from "react-icons/io5";
import WrapperGeneralError from "../styles/GeneralError";

function GeneralError() {
  const error = useRouteError();
  console.log(error);
  return (
    <WrapperGeneralError>
      {error.status === 404 ? (
        <div>
          <h3>This page does not exist!</h3>
          <div className="back">
            <IoReturnUpBackSharp />
            <Link to="/">back home</Link>
          </div>
          <img src={error404} alt="error 404" />
        </div>
      ) : (
        <div>
          <h3>Something went wrong</h3>
          <p>{error.statusText}</p>
          <div className="back">
            <IoReturnUpBackSharp />
            <Link to="/">back home</Link>
          </div>
          <img src={otherErrors} alt="error" />
        </div>
      )}
    </WrapperGeneralError>
  );
}
export default GeneralError;
