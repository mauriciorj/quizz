const CardDescription = ({ description }: { description: string }) => {
  return (
    <div className="min-h-10 text-lg font-bold text-gray-600">{description}</div>
  );
};

export default CardDescription;
