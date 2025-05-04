import { useState } from "react";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import PinDetails from "../components/PinDetails";

function Pin() {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <>
      <div>
        <div>
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="w-100">
          <Feed />
        </div>
        <div>
          <PinDetails />
        </div>
      </div>
    </>
  );
}

export default Pin;
