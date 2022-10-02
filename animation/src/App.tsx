import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0px 1px 3px black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: blue;
`;

function App() {
  const [click, setClick] = useState(false);
  const toggleClick = () => {
    setClick((prev) => !prev);
  };
  return (
    <Wrapper onClick={toggleClick}>
      <Box>{!click ? <Circle layoutId="circle" /> : null}</Box>
      <Box>{click ? <Circle layoutId="circle" /> : null}</Box>
    </Wrapper>
  );
}

export default App;
