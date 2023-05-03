import { Link } from "react-router-dom";
import notify from "../../helpers/notify";

export default function Navbar() {
  const handleLogout = () => {
    notify("Succes logout");
    localStorage.clear();
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={""} className="btn btn-ghost normal-case text-xl">
            E-Book Reader
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={""}>Books</Link>
            </li>
            <li>
              <Link onClick={handleLogout} to={"login"}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
