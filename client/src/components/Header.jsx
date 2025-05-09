import UserBoard from "../UserBoard.jsx/UserBoard";
import Navigaion from "./Navigaion";

export default function Header() {
  return (
    <div className="bg-white p-5 flex items-center justify-between">
      <Navigaion />
      <UserBoard />
    </div>
  );
}
