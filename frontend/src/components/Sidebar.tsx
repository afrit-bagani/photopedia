import { Link, NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import styles from "../css/Sidebar.module.css";

type SidebarProps = {
  closeToogle?: React.Dispatch<React.SetStateAction<boolean>>;
  user: { _id: string; name: string };
};

function Sidebar({ closeToogle, user }: SidebarProps) {
  const catagories = [
    { name: "Animal", image: "dfksjbf" },
    { name: "Animal", image: "dfksjbf" },
    { name: "Animal", image: "dfksjbf" },
    { name: "Animal", image: "dfksjbf" },
  ];

  const handleCloseSidebar = () => {
    if (closeToogle) closeToogle(false);
  };
  return (
    <div
      className={`${styles.sidebar} d-flex flex-column justify-content-evenly bg-dark-subtle vh-100 col-md-3 py-5`}
    >
      <div className="d-flex flex-column justify-content-evenly h-100">
        {catagories.slice(0, catagories.length).map((catagory, idx) => (
          <NavLink
            to={`/catagory/${catagory.name}`}
            key={idx}
            onClick={handleCloseSidebar}
            className="text-decoration-none text-black fw-semibold fs-5"
          >
            {catagory.name}
          </NavLink>
        ))}
      </div>
      <Link
        to={`/user-profile/${user._id}`}
        className="d-flex justify-content-around align-items-center text-decoration-none text-dark fw-bold w-100"
      >
        <img src={"logo.png"} width={25} />
        <p>{user.name}</p>
        <IoIosArrowForward />
      </Link>
    </div>
  );
}
export default Sidebar;
