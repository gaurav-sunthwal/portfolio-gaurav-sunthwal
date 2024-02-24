import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

import myImg from "/src/assets/AboutMe/me.png";

function About() {
  return (
    <div>
      <VStack h={"100vh"} justifyContent={"center"}>
        <HStack>
          <Box p={3} maxW={"50%"}>
            <Image m={3} w={"80%"} src={myImg} />
          </Box>
          <Box maxW={"50%"}>
            <VStack>
              <Heading size={"4xl"}>I'm Gaurav Sunthwal</Heading>
              <Text>
                Passionate Web Developer | Crafting Digital Experiences |
                Problem Solver
              </Text>
              <Box>
                <Text>
                  ` 🎓 Computer Science Student | Exploring the Boundaries of
                  Tech | Web Developer | Continuous Learner Greetings! I'm
                  Gaurav Naresh Sunthwal, and I'm embarking on an exciting
                  journey as a Computer Science student at MIT-World Peace
                  University, Pune. My passion for technology and my thirst for
                  knowledge drive me as I dive into the dynamic world of
                  computer science. 🚀 Starting my B.Tech program in August
                  2023, I am eagerly anticipating the opportunities to learn,
                  innovate, and collaborate that await me. With a strong
                  foundation in various technologies and a hunger for new
                  challenges, I'm ready to take on the next phase of my
                  educational and professional growth. 🛠️ Proficient in a
                  variety of skills, I've dabbled in the art of Web Development,
                  mastering tools like ReactJS, HTML, CSS, JavaScript, and
                  Node.js. My coding journey has also taken me through the
                  realms of Python and Java, just to name a few. These skills
                  empower me to create robust and captivating digital solutions
                  that cater to real-world needs. 📚 Education is just the
                  beginning for me. I'm a firm believer in the power of
                  continuous learning. As technology evolves at a rapid pace, I
                  am committed to staying at the forefront of industry trends,
                  consistently expanding my skill set to remain adaptable and
                  innovative. 🤝 I am enthusiastic about connecting with fellow
                  learners, professionals, and visionaries who share my passion
                  for tech and growth. Whether you're interested in tech
                  discussions, project collaborations, or simply networking, I'm
                  eager to engage and contribute to meaningful conversations.
                  Let's connect and explore the possibilities! Feel free to
                  reach out to me at Here's to embracing the future of
                  technology together! 🌟 `
                </Text>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </div>
  );
}

export default About;
