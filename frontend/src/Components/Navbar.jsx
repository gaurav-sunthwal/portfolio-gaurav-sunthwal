import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { HashRouter, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        style={{
          width: "100%",
          position: "fixed",
          backdropFilter: blur("10px"),
          backgroundColor: "#171717b3",
        }}
      >
        <HStack p={3} justifyContent={"space-between"}>
          <Box>
            <Link to={"/"}>
              <Heading size={"lg"}>Gaurav Sunthwal</Heading>
            </Link>
          </Box>
          <HStack className="manu">
            <Manu title={"Services"} hashLink={"#Services"} />
            <Manu title={"Skills"} hashLink={"#skills"} />
            <Manu title={"Work"} hashLink={"#Work"} />
            <Manu title={"Contact"} hashLink={"#Contact"} />
          </HStack>
        </HStack>
      </nav>
    </div>
  );
}

function Manu({ title, hashLink }) {
  return (
    <>
      <Box m={2}>
        <Link to={hashLink}>
          <Text fontSize={"21px"} fontWeight={"500"}>
            {title}
          </Text>
        </Link>
      </Box>
    </>
  );
}
export default Navbar;
