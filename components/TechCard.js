const TechCard = ({ stack }) => {
  return (
    <div className="w-11/12 bg-opacity-5 bg-white rounded shadow-md m-5 py-5 px-10">
      <div className="leading-10">{stack.tech}</div>
      <div className="h-4 w-full bg-grey rounded-lg">
        <div
          className="h-full bg-gradient-to-r from-orange to-pink rounded-lg"
          style={{ width: `${stack.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TechCard;
