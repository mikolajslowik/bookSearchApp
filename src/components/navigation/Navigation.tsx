import { NavLink } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  const navigationComponents = [
    {
      path: "/",
      name: "homepage",
    },
    {
      path: "/books",
      name: "books",
    },
    {
      path: "/favourites",
      name: "favourites",
    },
    {
      path: "/about",
      name: "about",
    },
  ];

  return (
    <div className="navigation">
      <div className="logo">HTMElo</div>
      <div className="paths">
        {navigationComponents.map((navEl) => {
          return (
            <NavLink
              to={navEl.path}
              key={navEl.path}
              className={`path ${navEl.name}`}
            >
              <p>{navEl.name}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Navigation;
