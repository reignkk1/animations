import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

const boxVariant = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(182, 227, 136)" },
};

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <Container ref={containerRef}>
        <Box
          drag
          dragSnapToOrigin
          dragConstraints={containerRef}
          variants={boxVariant}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        ></Box>
      </Container>
    </Wrapper>
  );
}

export default App;
