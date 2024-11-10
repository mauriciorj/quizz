"use client";

import React, { useEffect, useState } from "react";
import ButtonContinue from "@/components/buttonContinue";
import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";
import Input from "@/components/input";

const YourWeight = ({
  height,
  onClick,
}: {
  height?: number;
  onClick: (value: number) => void;
}) => {
  const [btnValue, setBtnValue] = useState<number | null>(null);
  const [imc, setImc] = useState<number | null>(null);

  const handleOnChange = (value: string) => {
    setBtnValue(parseInt(value));
  };

  const validConditions = Boolean(
    btnValue && btnValue && btnValue > 30 && btnValue < 250
  );

  useEffect(() => {
    if (validConditions && btnValue && height) {
      const heightInM = height / 100;
      const calcIMC = Number((btnValue / (heightInM * heightInM)).toFixed(1));
      setImc(calcIMC);
    } else {
      setImc(null);
    }
  }, [btnValue]);

  return (
    <Card>
      <CardTitle title="Qual o seu peso atual (kg)" />
      <div className="flex flex-col items-center">
        <div className="ml-[-70px]">
          <Input
            name="peso"
            onChange={handleOnChange}
            placeholder="0"
            unit="kg"
            value={btnValue}
          />
        </div>
        {imc && imc < 18.5 ? (
          <div className="bg-[#fefbe7] mx-3 mt-10 px-4 py-4 rounded-lg text-left">
            <p className="text-sm text-slate-900 font-bold mb-1">
              Seu IMC é {imc}, o que é considerado abaixo do peso
            </p>
            <p className="text-sm text-slate-700">
              O foco deve ser musculo e dieta balanceada. Se mantenha focado em
              manter seu consumo de calorias dentro do recomendado.
            </p>
          </div>
        ) : null}
        {imc && 18.5 < imc && imc < 24.9 ? (
          <div className="bg-[#f5faf7] mx-3 mt-10 px-4 py-4 rounded-lg text-left ">
            <p className="text-sm text-slate-900 font-bold mb-1">
              Ótimo começo para ter um corpo fit
            </p>
            <p className="text-sm text-slate-700">
              Pesquisas tem mostrado que caminhar ajuda a melhorar o
              metabolismo, perder peso, ganhar força muscular e melhorar a saúde
              cardíaca.
            </p>
          </div>
        ) : null}
        {imc && 25 < imc && imc < 29.9 ? (
          <div className="bg-[#fefbe7] mx-3 mt-10 px-4 py-4 rounded-lg text-left ">
            <p className="text-sm text-slate-900 font-bold mb-1">
              Seu IMC é {imc}, o que é considerado acima do peso
            </p>
            <p className="text-sm text-slate-700">
              Você deve prestar mais atenção com o seu peso. Nós vamos
              considerar o seu IMC para montar o seu programa.
            </p>
          </div>
        ) : null}
        {imc && imc > 30 ? (
          <div className="bg-[#fcf3f3] mx-3 mt-10 px-4 py-4 rounded-lg text-left ">
            <p className="text-sm text-slate-900 font-bold mb-1">
              Seu IMC é {imc}, o que é considerado obesidade. Nós vamos
              considerar o seu IMC para montar o seu programa.
            </p>
            <p className="text-sm text-slate-700">
              Você deve focar no seu peso.
            </p>
          </div>
        ) : null}
        <div className="w-full px-3 mt-5 flex flex-row justify-center">
          <ButtonContinue
            isDisabled={!validConditions}
            onClick={() =>
              validConditions && btnValue ? onClick(btnValue) : null
            }
            label="Continuar"
          />
        </div>
      </div>
    </Card>
  );
};

export default YourWeight;
