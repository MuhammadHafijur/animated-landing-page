const Leaf = ({ className, imageUrl }) => {
  return (
    <div className={className}>
      <img className="leaf" src={imageUrl} alt="" />
    </div>
  );
};

export default Leaf;
