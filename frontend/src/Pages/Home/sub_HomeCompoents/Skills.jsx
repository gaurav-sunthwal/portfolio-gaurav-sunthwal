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
import ReactImg from "/src/assets/Img/Skills/react.png";
import NextJs from "/src/assets/Img/Skills/nextjs.png";
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
          justifyContent={"space-between"}
        >
          <Box
            maxW={isLargerThan ? "50%" : "100%"}
            display={"block"}
            m={"auto"}
            p={5}
          >
            <Image w={isLargerThan ? "100%" : "95%"} src={codingImg} />
          </Box>
          <Box maxW={isLargerThan ? "50%" : "100%"}>
            <HStack
              overflow={"auto"}
              flexWrap={isLargerThan ? "wrap" : "nowrap"}
              justifyContent={"center"}
            >
              <SkillIcons
                imgUrl={
                  "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
                }
                skillName={"Python"}
              />

              <SkillIcons imgUrl={ReactImg} skillName={"React Js"} />
              <SkillIcons imgUrl={"https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png"} skillName={"Next Js"} />
              <SkillIcons imgUrl={ReactImg} skillName={"React Js"} />
              <SkillIcons imgUrl={ReactImg} skillName={"React Js"} />
              <SkillIcons imgUrl={ReactImg} skillName={"React Js"} />
              <SkillIcons imgUrl={ReactImg} skillName={"React Js"} />
              <SkillIcons imgUrl={ReactImg} skillName={"React Js"} />
              <SkillIcons imgUrl={ReactImg} skillName={"React Js"} />
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
        <Box p={2} h={"120px"}>
          <Image w={"100px"} src={imgUrl} />
        </Box>
        <Heading size={"md"} m={3}>
          {skillName}
        </Heading>
      </VStack>
    </>
  );
}
export default Skills;
