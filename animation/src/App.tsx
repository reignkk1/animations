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
`;

function App() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const boxVariant = {
    start: { opacity: 0, scale: 0 },
    end: { opacity: 1, scale: 1, rotateZ: 360 },
    leave: { opacity: 0, y: 10, scale: 0 },
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {show ? (
          <Box
            variants={boxVariant}
            initial="start"
            animate="end"
            exit="leave"
          />
        ) : null}
      </AnimatePresence>
      <button onClick={toggleShow}>Click</button>
    </Wrapper>
  );
}

export default App;
