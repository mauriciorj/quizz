const ProgressBar = ({
  progress,
  onClick,
}: {
  progress: number;
  onClick: () => void;
}) => {
  return (
    <>
      <div>
        <button className="font-bold text-gray-500" onClick={onClick}>
          Voltar
        </button>
      </div>
      <div className="border border-1 border-slate-300 rounded-md mb-6 h-[20px] w-full bg-white">
        <div
          className="h-[19px] pt[-1px] rounded-l-md bg-slate-300"
          style={{ width: `${progress || 0}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
