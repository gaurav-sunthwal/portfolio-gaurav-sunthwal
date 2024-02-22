import {
  Box,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import codingImg from "/src/assets/Img/image.png";
function Skills() {
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      <VStack
        h={"100vh"}
        justifyContent={"center"}
        w={isLargerThan ? "100%" : "100%"}
      >
        <Heading>My Skills</Heading>

        <HStack
          w={isLargerThan ? "100%" : "100%"}
          flexWrap={isLargerThan ? "nowrap" : "wrap"}
        >
          <Box
            maxW={isLargerThan ? "50%" : "100%"}
            display={"block"}
            m={"auto"}
          >
            <Image w={isLargerThan ? "100%" : "95%"} src={codingImg} />
          </Box>
          <Box maxW={isLargerThan ? "50%" : "100%"}>
            <HStack
              overflow={"auto"}
              flexWrap={isLargerThan ? "wrap" : "nowrap"}
            >
              <SkillIcons
                imgUrl={
                  "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
                }
                skillName={"Python"}
              />
              
              <SkillIcons
                imgUrl={
                  "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
                }
                skillName={"Python"}
              />
              <SkillIcons
                imgUrl={
                  "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
                }
                skillName={"Python"}
              />
              <SkillIcons
                imgUrl={
                  "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
                }
                skillName={"Python"}
              />
              <SkillIcons
                imgUrl={
                  "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
                }
                skillName={"Python"}
              />
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </div>
  );
}
function SkillIcons({ imgUrl, skillName }) {
  return (
    <>
      <VStack m={5} p={2}>
        <Image w={"100px"} src={imgUrl} />
        <Text>{skillName}</Text>
      </VStack>
    </>
  );
}
export default Skills;
