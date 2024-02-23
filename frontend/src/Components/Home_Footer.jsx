import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
function Home_Footer() {
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      <VStack h={"auto"} bg={"#171717"} justifyContent={"center"}>
        <HStack
          justifyContent={"space-around"}
          p={3}
          w={"100%"}
          flexWrap={"wrap"}
        >
          <Box>
            <Heading size={"md"}>© Build By Team of Gaurav</Heading>
            <HStack mt={2}>
              <Box>
                <IoMail />
              </Box>
              <Text>gauravsunthwal162022@gmail.com</Text>
            </HStack>
          </Box>
          <Box textAlign={"center"} maxW={isLargerThan ? "50%" : "100%"}>
            <Box p={3}>
              <Heading p={2}>Let’s work together</Heading>
              <Text p={2}>
                I'm currently available for new work. Let me know if you're
                looking for a digital designer. Let’s talk about the next big
                thing!
              </Text>
            </Box>
            <HStack justifyContent={"center"}>
              <SocalCard
                icon={<FaInstagram />}
                link={"https:/instagram.com/gaurav_sunthwal"}
              />
              <SocalCard
                icon={<VscGithubInverted />}
                link={"https://github.com/gaurav-sunthwal"}
              />
              <SocalCard
                icon={<FaLinkedin />}
                link={"https://www.linkedin.com/in/gaurav-sunthwal/"}
              />
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </div>
  );
}

function SocalCard({ link, icon }) {
  return (
    <>
      <Box m={3}>
        <Link to={link} target="blank">
          <Heading>{icon}</Heading>
        </Link>
      </Box>
    </>
  );
}
export default Home_Footer;
