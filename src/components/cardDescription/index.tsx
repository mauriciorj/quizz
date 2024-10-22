const CardDescription = ({
  description,
  isPink,
}: {
  description: string;
  isPink?: boolean;
}) => {
  return (
    <div
      className={`px-3 mb-5 text-lg ${isPink ? "text-pink" : "text-gray-600"}`}
    >
      {description}
    </div>
  );
};

export default CardDescription;
