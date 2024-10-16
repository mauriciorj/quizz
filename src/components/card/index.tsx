const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[60%] w-[90%] pt-10 pb-10 text-center bg-white border border-1 border-slate-300 shadow-md rounded-lg p-4">
      {children}
    </div>
  );
};

export default Card;
