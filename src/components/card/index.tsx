import ButtonContinue from "@/components/buttonContinue";
import LoadingBar from "@/components/loadingBar";

const Card = ({
  children,
  hasContinueCta,
  isContinueCtaEnabled,
  isLoadingBar,
  onClick,
  setProgressBarDone,
}: {
  children: React.ReactNode;
  hasContinueCta?: boolean;
  isContinueCtaEnabled?: boolean;
  isLoadingBar?: boolean;
  onClick?: (label?: string) => void | undefined;
  setProgressBarDone?: () => void | undefined;
}) => {
  return (
    <div
      className={`h-full p-0 w-full justify-between text-center bg-white`}
    >
      {!hasContinueCta && !isLoadingBar && children}
      {hasContinueCta && onClick && (
        <div className="h-full w-full flex flex-col justify-between">
          <div className="h-full w-full overflow-auto relative pb-20">
            {children}
          </div>
          <div className="w-full pb-3 px-3 after:content-[''] after:absolute after:inset-x-0 after:bottom-[91px] after:h-10 after:bg-gradient-to-b after:from-transparent after:to-white">
            <ButtonContinue
              isDisabled={isContinueCtaEnabled}
              label="Cotinuar"
              onClick={onClick}
            />
          </div>
        </div>
      )}
      {isLoadingBar && setProgressBarDone && (
        <div className="w-full flex flex-col justify-between">
          <div className="h-full w-full overflow-auto relative pb-20">
            {children}
          </div>
          <div className="absolute bottom-4  w-full px-0">
            <LoadingBar setProgressBarDone={setProgressBarDone} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
