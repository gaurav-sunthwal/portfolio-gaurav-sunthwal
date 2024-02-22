import { Box, Heading, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

function FlotingText() {
  return (
    <VStack h={"90vh"} justifyContent={"center"} whiteSpace={"nowrap"} overflow={"auto"}>
      <MovingTextRightToLeft text={" Web • Cybersecurity • Machine Learning"} />
    </VStack>
  );
}

const MovingTextRightToLeft = ({ text }) => {
  useEffect(() => {
    const scrollingText = document.getElementById("scrollingTextRightToLeft");

    const updateTextPosition = () => {
      const scrollPosition = window.scrollY;
      scrollingText.style.transform = `translateX(${-scrollPosition / 15}px)`;
      requestAnimationFrame(updateTextPosition);
    };

    updateTextPosition();

    return () => {
      window.removeEventListener("scroll", updateTextPosition);
    };
  }, []);

  return (
    <div className="moving-text" id="scrollingTextRightToLeft" >
      <Heading fontSize={"104px"} className="leftToRight flotingText">
        {text}
      </Heading>
    </div>
  );
};

export default FlotingText;
