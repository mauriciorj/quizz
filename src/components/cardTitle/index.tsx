const CardTitle = ({ isPink, title }: { isPink?: boolean; title: string }) => {
  return (
    <h1
      className={`mb-5 mt-5 px-3 text-3xl font-bold ${
        isPink ? "text-pink" : "text-black"
      }`}
    >
      {title}
    </h1>
  );
};

export default CardTitle;
