import { motion } from "framer-motion";
import { fadeIn } from "variants";

const TextContainer = () => {
  return (
    <div className="textContainer">
      {/* Top */}
      <div className="textContainer-top">
        <span className="text-green-600">Find your clean juice</span>
        <span className="first-letter:text-5xl">2 /4</span>
      </div>

      {/* Middle */}
      <motion.div
        variants={fadeIn()}
        initial="initial"
        animate="animate"
        className="textContainer-middle"
      >
        <span className="">ORANGE</span>
      </motion.div>

      {/* Bottom */}
      <div className="textContainer-bottom">
        <button>Show all the juices</button>
        <p>
          Your healthy <span> life </span> <br /> starts here with us
        </p>
      </div>
    </div>
  );
};

export default TextContainer;
