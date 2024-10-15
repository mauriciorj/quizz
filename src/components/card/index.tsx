const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[90%] pt-7 pb-5 text-center bg-white border border-1 border-slate-300 shadow-md rounded-lg p-4">
      {children}
    </div>
  );
};

export default Card;
