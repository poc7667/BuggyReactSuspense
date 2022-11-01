import { Link } from "react-router-dom";

function SideBar(props) {
  return (
    <ul>
        <li>
            <Link to={'articles'}>articles</Link>
        </li>
        <li>
            <Link to={'issues'}>issues</Link>
        </li>
    </ul>
  );
}

export default SideBar;
