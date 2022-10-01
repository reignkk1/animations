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
  const nextClick = () => {
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const boxVariant = {
    start: { opacity: 0, x: 500, scale: 0 },
    end: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      x: -500,
      scale: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((prev) =>
          prev === visible ? (
            <Box
              variants={boxVariant}
              initial="start"
              animate="end"
              exit="exit"
              key={prev}
            >
              {prev}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={nextClick}>Click</button>
    </Wrapper>
  );
}

export default App;
