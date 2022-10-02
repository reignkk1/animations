import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 500px;
  height: 200px;
  background-color: white;
  position: absolute;
  border-radius: 50px;
  top: 100px;
  box-shadow: 0px 1px 3px black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextClick = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevClick = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const boxVariant = {
    start: (back: boolean) => ({ opacity: 0, x: back ? -500 : 500, scale: 0 }),
    end: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: (back: boolean) => ({
      opacity: 0,
      x: back ? 500 : -500,
      scale: 0,
      transition: {
        duration: 1,
      },
    }),
  };

  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={boxVariant}
          initial="start"
          animate="end"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevClick}>Prev</button>
      <button onClick={nextClick}>Next</button>
    </Wrapper>
  );
}

export default App;
