const ButtonContinue = ({
  icon = null,
  isDisabled = false,
  label,
  onClick,
  value,
}: {
  icon?: React.ReactNode;
  isDisabled?: boolean;
  label: string;
  onClick: (label?: string) => void;
  value?: string;
}) => {
  return (
    <button
      className="flex flow-row items-center px-32 py-5 text-slate-500 border border-1 rounded-md bg-pink hover:bg-darkPink text-white disabled:opacity-55 disabled:bg-slate-400"
      onClick={() =>
        onClick(value?.toLocaleLowerCase() || label.toLocaleLowerCase())
      }
      disabled={isDisabled}
    >
      <div className={`w-full ${icon ? "ml-2" : "ml-0"} font-bold text-lg`}>
        {label.toUpperCase()}
      </div>
    </button>
  );
};

export default ButtonContinue;
