import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from "react-loader-spinner";

export default function Spinner() {
  return (
    <BallTriangle
      height="70"
      width="70"
      color="#05889980"
      ariaLabel="loading"
    />
  );
}
