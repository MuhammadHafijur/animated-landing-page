import { motion } from "framer-motion";
import React from "react";
import { me, meWrapper } from "variants";

const HumanContainer = () => {
  return (
    <motion.div
      variants={meWrapper}
      initial="initial"
      animate="animate"
      className="bottleWrapper"
    >
      <motion.img
        variants={me}
        src="/images/juice.png"
        alt=""
        className="bottle"
      />
    </motion.div>
  );
};

export default HumanContainer;
