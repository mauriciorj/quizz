import CheckIcon from "@/icons/check";

const ButtonLargeWithCheck = ({
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
      className={`w-[500px] flex flow-row justify-between items-center px-5 py-4 text-slate-500 border border-1 rounded-lg opacity-85 ${
        isChecked ? "bg-pink" : "bg-slate-300"
      } text-white disabled:opacity-55 disabled:bg-slate-400`}
      onClick={() =>
        onClick(value?.toLocaleLowerCase() || label.toLocaleLowerCase())
      }
      disabled={isDisabled}
    >
      <div className="flex flex-row">
        <div
          className={`flex p-1 items-center bg-white rounded-full ${
            isChecked
              ? "border border-2 border-pink"
              : "border border-2 border-slate-400"
          }`}
        >
          <div className="w-[15px] h-[15px]">
            {isChecked ? <CheckIcon color="pink" /> : null}
          </div>
        </div>
        <div className="text-slate-900 text-lg font-bold ml-3">{label}</div>
      </div>
      <div>{icon && <div className="w-[25px] text-4xl mr-3">{icon}</div>}</div>
    </button>
  );
};

export default ButtonLargeWithCheck;
