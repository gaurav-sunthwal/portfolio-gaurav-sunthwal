import { Box, Heading } from "@chakra-ui/react";

function Title({ title }) {
  return (
    <div>
      <Box p={3}>
        <Heading size={"4xl"} className="title">
          {title}
        </Heading>
      </Box>
    </div>
  );
}

export default Title;
