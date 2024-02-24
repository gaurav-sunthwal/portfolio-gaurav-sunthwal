import { Box, useMediaQuery } from "@chakra-ui/react";
import Info from "./sub_HomeCompoents/Info";
import FlotingText from "./sub_HomeCompoents/FlotingText";
import Skills from "./sub_HomeCompoents/Skills";
import Contact from "./sub_HomeCompoents/Contact";
import Services from "./sub_HomeCompoents/Services";
import { useEffect, useRef } from "react";

function Home() {
  const ServicesSec = useRef(null);
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");
  useEffect(() => {
    console.log(window.location.href);
  }, []);
  return (
    <Box>
      <Box h={isLargerThan ? "8vh" : "5vh"}></Box>
      <Info />
      <FlotingText />
      <Skills />
      <Box ref={ServicesSec}>
        <Services />
      </Box>
      <Contact />
    </Box>
  );
}

export default Home;
