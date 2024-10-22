const ButtonContinue = ({
  isDisabled = false,
  label,
  onClick,
  value,
}: {
  isDisabled?: boolean;
  label: string;
  onClick: (label?: string) => void;
  value?: string;
}) => {
  return (
    <button
      className="w-full flex flow-row items-center py-5 text-slate-500 border border-1 rounded-lg bg-pink hover:bg-darkPink text-white disabled:opacity-55 disabled:bg-slate-400"
      onClick={() =>
        onClick(value?.toLocaleLowerCase() || label.toLocaleLowerCase())
      }
      disabled={isDisabled}
    >
      <div className={`w-full font-bold text-lg`}>
        {label.toUpperCase()}
      </div>
    </button>
  );
};

export default ButtonContinue;
