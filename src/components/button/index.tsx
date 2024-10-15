const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <button className="bg-blue-500 my-5 py-2 px-5 text-lg text-white p-2 rounded-md" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
