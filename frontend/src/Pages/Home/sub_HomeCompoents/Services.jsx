import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Title from "../../../Components/Title";

import fullstack from "/src/assets/ServicesImg/fullstack.png";
import frontend from "/src/assets/ServicesImg/frontend.png";
import backend from "/src/assets/ServicesImg/backend.png";

function Services() {
  return (
    <div>
      <VStack h={"auto"} justifyContent={"center"}>
        <Box p={3}>
          <Title title={"Services"} />
        </Box>
        <HStack p={3} flexWrap={"wrap"} justifyContent={"center"}>
          <ServicesCard
            imgUrl={fullstack}
            title={"Fullstack Web App"}
            discription={
              "As a full-stack developer, I provide end-to-end solutions for your web development projects. From concept to deployment, I leverage my expertise in both front-end and back-end technologies to deliver comprehensive solutions tailored to your needs. Whether you're starting from scratch or enhancing an existing application, I offer seamless integration, streamlined workflows, and ongoing support to ensure your project's success from start to finish."
            }
          />
          <ServicesCard
            imgUrl={backend}
            title={"Backend Devlopment"}
            discription={
              "With expertise in Node.js and MongoDB, I offer robust back-end development services to power your web applications. Whether you need to build scalable APIs, manage complex data structures, or integrate with third-party services, I've got you covered. I design efficient server-side solutions that handle data seamlessly, ensuring your application performs optimally and delivers value to your users."
            }
          />
          <ServicesCard
            imgUrl={frontend}
            title={"Frontend Devloper"}
            discription={
              "I specialize in front-end development using cutting-edge technologies like React.js and Next.js. From crafting responsive user interfaces to implementing interactive features, I create engaging web experiences that captivate users and drive results. With a keen eye for design and a focus on usability, I ensure that your website not only looks stunning but also delivers an exceptional user experience across devices."
            }
          />
        </HStack>
      </VStack>
    </div>
  );
}

function ServicesCard({ imgUrl, title, discription }) {
  return (
    <>
      <Box p={3}>
        <Card maxW={"sm"} h={"700px"} bg={"#171717"} color={"white"}>
          <CardBody>
            <Image
              src={imgUrl}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{title}</Heading>
              <Text>{discription}</Text>
            </Stack>
          </CardBody>
          {/* <Divider /> */}
          {/* <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter> */}
        </Card>
      </Box>
    </>
  );
}

export default Services;
