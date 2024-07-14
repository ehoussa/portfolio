import NavBar from "./assets/Components/NavBar"
import Body from "./assets/Components/Body"
import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react'
import styles from "./assets/styles/Background.module.css"


function App() {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <>
      <Box className={styles.background} h={dimensions.height} w={dimensions.width}>
        <NavBar />
        <Body />
      </Box>
    </>
  )
}

export default App
