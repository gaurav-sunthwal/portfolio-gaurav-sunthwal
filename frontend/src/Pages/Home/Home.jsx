import { Box, useMediaQuery } from "@chakra-ui/react";
import Info from "./sub_HomeCompoents/Info";
import FlotingText from "./sub_HomeCompoents/FlotingText";
import Skills from "./sub_HomeCompoents/Skills";
import Contact from "./sub_HomeCompoents/Contact";
import Services from "./sub_HomeCompoents/Services";

function Home() {
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box h={isLargerThan ? "8vh" : "5vh"}></Box>
      <Info />
      <FlotingText />
      <Skills />
      <Services/>
      <Contact/>
    </Box>
  );
}

export default Home;
