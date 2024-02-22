import { Box, useMediaQuery } from "@chakra-ui/react";
import Info from "./sub_HomeCompoents/Info";
import FlotingText from "./sub_HomeCompoents/FlotingText";

function Home() {
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      <Box h={isLargerThan ? "8vh" : "5vh"}></Box>
      <Info />
      <FlotingText />
    </div>
  );
}

export default Home;
