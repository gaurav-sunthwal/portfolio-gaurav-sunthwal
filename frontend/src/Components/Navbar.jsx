import {
  Box,
  Card,
  HStack,
  Heading,
  Text,
  VStack,
  transition,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import NavBarContext from "../Context/NavbarContext";
function Navbar() {
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");
  const [openManu, setOpenManu] = useState(false);
  function handalOpenClick() {
    setOpenManu(true);
  }
  function handalCloseClick() {
    setOpenManu(false);
  }
  return (
    <div>
      <nav
        style={{
          width: "100%",
          position: "fixed",
          backdropFilter: blur("10px"),
          backgroundColor: "#171717b3",
          zIndex: 1000,
        }}
      >
        <HStack p={3} justifyContent={"space-between"}>
          <Box>
            <Link to={"/"}>
              <Heading size={"lg"}>Gaurav Sunthwal</Heading>
            </Link>
          </Box>
          {isLargerThan ? (
            <>
              <HStack className="manu">
                <Manu title={"Home"} hashLink={"#Home"} />
                <Manu title={"Skills"} hashLink={"#skills"} />
                <Manu title={"Services"} hashLink={"#Services"} />
                <Manu title={"Contact"} hashLink={"#Contact"} />
              </HStack>
            </>
          ) : (
            <>
              {openManu === true ? (
                <Box
                  fontSize={"25px"}
                  onClick={handalCloseClick}
                  cursor={"pointer"}
                >
                  <IoCloseSharp />
                </Box>
              ) : (
                <>
                  <Box
                    fontSize={"25px"}
                    onClick={handalOpenClick}
                    cursor={"pointer"}
                  >
                    <IoMenu />
                  </Box>
                </>
              )}
            </>
          )}
        </HStack>

        {openManu === true ? (
          <Card bg={"#171717"} color={"white"} m={2} border={"2px"}>
            <Box p={2}>
              <Manu title={"Home"} hashLink={"#Home"} />
              <Manu title={"Skills"} hashLink={"#skills"} />
              <Manu title={"Services"} hashLink={"#Services"} />
              <Manu title={"Contact"} hashLink={"#Contact"} />
            </Box>
          </Card>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
}

function Manu({ title, hashLink }) {
  const { setMenu } = useContext(NavBarContext);
  return (
    <>
      <Box
        cursor={"pointer"}
        m={2}
        onClick={() => {
          setMenu(title);
        }}
      >
        <Link
          to={title}
          activeClass={title}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Text fontSize={"21px"} fontWeight={"500"}>
            {title}
          </Text>
        </Link>
      </Box>
    </>
  );
}
export default Navbar;
