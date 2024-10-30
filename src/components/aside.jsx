import { Link } from "react-router-dom";
import "../styles/aside.css"

function Aside() {
  return (
    <aside className="aside">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </aside>
  );
}

export default Aside