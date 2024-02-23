import {
  Box,
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  Textarea,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import Title from "../../../Components/Title";
import { Link } from "react-router-dom";

import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Contact() {
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      <Box h={"100vh"} p={3}>
        <VStack h={"100vh"} justifyContent={"center"} w={"100%"}>
          <Box p={3}>
            <Title title={"Contact Me"} />
          </Box>
          <HStack
            w={"100%"}
            justifyContent={isLargerThan ? "center" : "normal"}
          >
            <Box maxW={"100%"} w={isLargerThan ? "60%" : "100%"}>
              <form>
                <FormElement lable={"Enter Name"} type={"name"} />
                <FormElement lable={"Enter Email"} type={"email"} />
                <Box m={3}>
                  <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea />
                  </FormControl>
                </Box>
                <VStack p={3}>
                  <Button m={3} w={"60%"}>
                    Submit
                  </Button>
                </VStack>
              </form>
            </Box>
          </HStack>
          <HStack justifyContent={"space-around"} w={"70%"} flexWrap={"wrap"}>
            <HStack>
              <SocalCard icon={<VscGithubInverted />} />
              <SocalCard icon={<FaInstagram />} />
              <SocalCard icon={<FaLinkedin />} />
            </HStack>
            <Box>
              <a href="mailto:gauravsunthwal162022@gmail.com" target="blank">
                <Heading size={"sm"}>gauravsunthwal162022@gmail.com</Heading>
              </a>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </div>
  );
}

function FormElement({ lable, type }) {
  return (
    <>
      <Box m={3}>
        <FormControl>
          <FormLabel>{lable}</FormLabel>
          <Input type={type} />
        </FormControl>
      </Box>
    </>
  );
}

function SocalCard({ link, icon }) {
  return (
    <>
      <Box m={3}>
        <Link to={link}>
          <Heading>{icon}</Heading>
        </Link>
      </Box>
    </>
  );
}
export default Contact;
