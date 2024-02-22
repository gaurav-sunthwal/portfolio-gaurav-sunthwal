import { Box, useMediaQuery } from "@chakra-ui/react";
import Info from "./sub_HomeCompoents/Info";
import FlotingText from "./sub_HomeCompoents/FlotingText";
import Skills from "./sub_HomeCompoents/Skills";

function Home() {
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box h={isLargerThan ? "8vh" : "5vh"}></Box>
      <Info />
      <FlotingText />
      <Skills />
    </Box>
  );
}

export default Home;
