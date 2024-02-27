import { useState } from "react";
import NavBarContext from "./NavbarContext";

const NavBarContextProvider = ({ children }) => {
  const [menu, setMenu] = useState("");

  const scrollToTarget = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <NavBarContext.Provider value={{ menu, setMenu }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarContextProvider;
