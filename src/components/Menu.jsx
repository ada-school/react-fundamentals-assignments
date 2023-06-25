import { Link } from "react-router-dom";
export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to={"/events"}>
            <p>Events</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
