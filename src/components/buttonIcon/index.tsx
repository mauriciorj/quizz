const ButtonIcon = ({
  icon,
  label,
  onClick,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  onClick: (label?: string) => void;
  value?: string;
}) => {
  return (
    <button
      className="flex flow-row items-center px-5 py-3 text-slate-500 border border-1 rounded-md bg-pink text-white"
      onClick={() =>
        onClick(value?.toLocaleLowerCase() || label.toLocaleLowerCase())
      }
    >
      {icon && <div className="w-[25px]">{icon}</div>}
      <div className={`w-full ${icon ? "ml-2" : "ml-0"}`}>{label}</div>
    </button>
  );
};

export default ButtonIcon;
