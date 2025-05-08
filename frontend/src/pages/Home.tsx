import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

import Sidebar from "../components/Sidebar";
import Pin from "./Pin";

function Home() {
  const user = {
    _id: "wufh",
    name: "Afrit Bagani",
  };
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <>
      {/* Desktop View */}
      <div className="d-none d-md-flex">
        <Sidebar user={user} />
      </div>

      {/* Mobile View */}
      <div className="d-flex d-md-none w-50 ">
        <HiMenu onClick={() => setToggleSidebar((prev) => !prev)} size={30} />
        {toggleSidebar && (
          <div className="bg-dark-subtle w-100">
            <div className="mb-5">
              <IoCloseSharp
                onClick={() => setToggleSidebar(false)}
                className="float-end"
                size={25}
              />
            </div>
            <Sidebar closeToogle={setToggleSidebar} user={user} />
          </div>
        )}
      </div>
      <Pin />
    </>
  );
}

export default Home;
