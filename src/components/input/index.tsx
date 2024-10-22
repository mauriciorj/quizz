const Input = ({
  name,
  label,
  onChange,
  placeholder,
  unit,
  value,
}: {
  name: string;
  label?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  unit?: string;
  value?: number | null;
}) => {
  return (
    <div className="w-full flex items-center justify-center">
      {label && (
        <label htmlFor={name} className="text-xl text-gray-900">
          {label}
        </label>
      )}
      <div className="max-w-[125px] flex flex-row items-baseline justify-center relative mt-2">
        <input
          className="m-0 min-w-0 border-0 px-1 py-2 text-5xl font-bold text-right text-gray-900 ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600"
          id={name}
          name={name}
          maxLength={3}
          onChange={(e) => onChange(e.target.value)}
          pattern="[0-9]{3}"
          placeholder={placeholder}
          type="text"
          value={value || ""}
        />
        <div className="text-slate-800 font-bold">{unit}</div>
      </div>
    </div>
  );
};

export default Input;
