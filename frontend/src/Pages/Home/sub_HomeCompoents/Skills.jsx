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
import NextJs from "/src/assets/Img/Skills/nextjs.jpeg";
import tailwind from "/src/assets/Img/Skills/tailwind.png";
import html from "/src/assets/Img/Skills/html.png";
import git from "/src/assets/Img/Skills/git.png";
import js from "/src/assets/Img/Skills/js.png";
import mongoDB from "/src/assets/Img/Skills/mongoDB.png";
import android from "/src/assets/Img/Skills/android.png";
import nodejs from "/src/assets/Img/Skills/nodejs.png";
import chakra from "/src/assets/Img/Skills/chakra.jpeg";
import Title from "../../../Components/Title";
function Skills() {
  const [isLargerThan] = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      <VStack
        h={"100vh"}
        justifyContent={"center"}
        w={isLargerThan ? "100%" : "100%"}
      >
        <Title title={"My Skills"} />

        <HStack
          w={isLargerThan ? "100%" : "100%"}
          flexWrap={isLargerThan ? "nowrap" : "wrap"}
          justifyContent={"normal"}
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
              justifyContent={"normal"}
            >
              <SkillIcons imgUrl={ReactImg} skillName={"React Js"} />
              <SkillIcons
                imgUrl={"https://chirag.codes/skills/nextjs.webp"}
                skillName={"Next Js"}
              />
              <SkillIcons imgUrl={html} skillName={"HTML"} />
              <SkillIcons imgUrl={tailwind} skillName={"Tailwind CSS"} />
              <SkillIcons imgUrl={chakra} skillName={"Chakra UI"} />
              <SkillIcons imgUrl={js} skillName={"Javascript"} />
              <SkillIcons imgUrl={nodejs} skillName={"Node JS"} />
              <SkillIcons imgUrl={mongoDB} skillName={"MongoDB"} />
              <SkillIcons
                imgUrl={
                  "https://avatars.githubusercontent.com/u/18133?s=200&v=4"
                }
                skillName={"GIT"}
              />
              <SkillIcons
                imgUrl={
                  "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg"
                }
                skillName={"Android"}
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
      <VStack m={3} p={2} justifyContent={"center"}>
        <Box p={2} h={"120px"} alignItems={"center"}>
          <Image w={"100px"}  src={imgUrl} />
        </Box>
        <Heading size={"md"} m={3}>
          {skillName}
        </Heading>
      </VStack>
    </>
  );
}
export default Skills;
