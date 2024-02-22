import { Box, useMediaQuery } from "@chakra-ui/react";
import Info from "./sub_HomeCompoents/Info";

function Home() {
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      <Box h={isLargerThan ? "8vh" : "5vh"}></Box>
      <Info />
    </div>
  );
}

export default Home;
