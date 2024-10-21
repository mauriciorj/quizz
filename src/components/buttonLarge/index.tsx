const ButtonLarge = ({
  icon = null,
  isChecked = false,
  isDisabled = false,
  label,
  onClick,
  value,
}: {
  icon?: React.ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
  label: string;
  onClick: (label?: string) => void;
  value?: string;
}) => {
  return (
    <button
      className={`w-[400px] flex flow-row justify-between items-center px-5 py-7 text-slate-500 border border-1 rounded-md opacity-85 ${
        isChecked ? "bg-pink" : "bg-slate-300"
      } hover:bg-slate-400 text-white disabled:opacity-55 disabled:bg-slate-400`}
      onClick={() =>
        onClick(value?.toLocaleLowerCase() || label.toLocaleLowerCase())
      }
      disabled={isDisabled}
    >
      <div
        className={`text-slate-900 text-lg font-bold ${icon ? "ml-2" : "ml-0"}`}
      >
        {label}
      </div>
      {icon && <div className="flex flex-row text-3xl">{icon}</div>}
    </button>
  );
};

export default ButtonLarge;
