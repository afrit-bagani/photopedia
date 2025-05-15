import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const menuOptions = [
    {
      name: "home",
      url: "/home",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "LogIn",
      url: "/login",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(true);
  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      {/* Desktop View  */}
      <nav className="nav d-none d-md-flex justify-content-center bg-dark px-3 py-2">
        <ul className="d-flex justify-content-center align-items-center">
          {menuOptions.map((menu, index) => (
            <li key={index} className="list-group-item">
              <Link
                to={menu.url}
                className="nav-link text-light fw-semibold px-3"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile View  */}
      <nav className="nav d-md-none position-relative justify-content-center align-items-center gap-2 bg-dark px-3 py-2">
        <button className="btn btn-light" onClick={toggleMenu}>
          Home ^
        </button>
        <Link to={"/login"}>
          <button className="btn btn-outline-light">LogIn</button>
        </Link>
        {menuOpen && (
          <div className="position-absolute z-3">
            <ul className="text-center">
              {menuOptions.map((menu, index) => (
                <li key={index} className="list-group-item">
                  <Link to={menu.url} className="nav-link text-light">
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
