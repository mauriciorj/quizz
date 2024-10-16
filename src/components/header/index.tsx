const Header = ({ step }: { step: number }) => {
  return (
    <nav
      className={`w-full flex flex-row pl-5 pt-5 items-center ${
        step > 1 ? "justify-center mb-0" : "justify-start mb-10"
      }`}
    >
      <div>Logo</div>
      <div className="text-2xl font-bold ml-2">Nome</div>
    </nav>
  );
};

export default Header;
