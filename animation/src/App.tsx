import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

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

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 1, 800], [2, 1, 0]);
  useEffect(() => {
    scale.onChange(() => {
      console.log(scale.get());
    });
  }, [x]);
  return (
    <Wrapper>
      <Box style={{ x, scale: scale }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
}

export default App;
