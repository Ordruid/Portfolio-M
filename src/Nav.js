import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Brian Hobby Junior Dev
      </Link>
      <ul>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/resume">Resume</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
