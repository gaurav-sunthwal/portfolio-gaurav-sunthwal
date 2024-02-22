import { Box, useMediaQuery } from "@chakra-ui/react";
import Info from "./sub_HomeCompoents/Info";
import FlotingText from "./sub_HomeCompoents/FlotingText";

function Home() {
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box h={isLargerThan ? "8vh" : "5vh"}></Box>
      <Info />
      <FlotingText />
    </Box>
  );
}

export default Home;
