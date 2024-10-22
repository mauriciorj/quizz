import ButtonContinue from "@/components/buttonContinue";

const Card = ({
  children,
  hasContinueCta,
  onClick,
}: {
  children: React.ReactNode;
  hasContinueCta?: boolean;
  onClick?: (label?: string) => void | undefined;
}) => {
  return (
    <div
      className={`h-full pb-4 w-full justify-between text-center bg-white border border-1 border-slate-300 shadow-md rounded-lg`}
    >
      {!hasContinueCta && children}
      {hasContinueCta && onClick && (
        <div className="h-full w-full flex flex-col justify-between">
          <div className="h-full w-full overflow-auto relative pb-20"> {children}</div>
          <div className="w-full px-3 after:content-[''] after:absolute after:inset-x-0 after:bottom-[86px] after:h-10 after:bg-gradient-to-b after:from-transparent after:to-white">
            <ButtonContinue label="Cotinuar" onClick={onClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
