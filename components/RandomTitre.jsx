import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion.custom(Heading)
const RandomTitre = (props) => {
    const {children}  =props 
    
  return (
    <>
      {children ? (
        <MotionHeading
         {...props}
          transition={{ duration: 3, yoyo: Infinity }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          {children}
        </MotionHeading>
      ) : null}
    </>
  );
};

export default RandomTitre