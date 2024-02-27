import { Box, Menu, useMediaQuery } from "@chakra-ui/react";
import Info from "./sub_HomeCompoents/Info";
import FlotingText from "./sub_HomeCompoents/FlotingText";
import Skills from "./sub_HomeCompoents/Skills";
import Contact from "./sub_HomeCompoents/Contact";
import Services from "./sub_HomeCompoents/Services";
import { useContext, useEffect, useRef } from "react";
import NavBarContext from "../../Context/NavbarContext";

function Home() {
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box h={isLargerThan ? "5vh" : "5vh"}></Box>
      <Box id="Home">
        <Info />
      </Box>
      <Box>
        <FlotingText />
      </Box>
      <Box className="Skills" id="Skills">
        <Skills />
      </Box>
      <Box id="Services">
        <Services />
      </Box>
      <Box id="Contact">
        <Contact />
      </Box>
    </Box>
  );
}

export default Home;
