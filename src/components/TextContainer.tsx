const TextContainer = () => {
  return (
    <div className="textContainer">
      {/* Top */}
      <div className="textContainer-top">
        <span className="text-green-600">Find your clean juice</span>
        <span className="first-letter:text-5xl">2 /4</span>
      </div>

      {/* Middle */}
      <div className="textContainer-middle">
        <span className="">ORANGE</span>
      </div>

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
