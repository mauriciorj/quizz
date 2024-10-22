import Image from "next/image";
import logo from "@/assets/images/logo_no_bg.png";

const ProgressBar = ({
  onClick,
  progress,
}: {
  onClick: () => void;
  progress: number;
}) => {
  return (
    <div className="px-3 mt-2">
      <div className="flex flex-row">
        <button className="font-bold text-gray-500" onClick={onClick}>
          Voltar
        </button>
        <div className="w-full flex flex-row items-center justify-center">
          <div>
            <Image
              alt="Seja bem vindo a sua jornada da dieta!"
              src={logo}
              width={50}
              height={50}
            />
          </div>
          <div className="text-lg text-slate-700 font-bold">Nome</div>
        </div>
      </div>
      <div className="bg-softGreyTwo bg-opacity-50 rounded-md h-[6px] w-full ">
        <div
          className="h-[6px] pt[-1px] rounded-l-md bg-pink"
          style={{ width: `${progress || 0}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
