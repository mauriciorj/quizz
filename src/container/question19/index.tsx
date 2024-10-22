"use client";

import React, { useState } from "react";
import ButtonContinue from "@/components/buttonContinue";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";
import Input from "@/components/input";

const Question18 = ({ onClick }: { onClick: (value: number) => void }) => {
  const [btnValue, setBtnValue] = useState<number | null>(null);

  const handleOnChange = (value: string) => {
    setBtnValue(parseInt(value));
  };

  const validConditions = Boolean(
    btnValue && btnValue && btnValue > 30 && btnValue < 250
  );

  return (
    <Card>
      <CardTitle title="Qual o seu peso (em Kgs)" />
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
        <div className="bg-softGrey mx-3 mt-10 px-4 py-4 rounded-lg text-left ">
          <p className="text-sm text-slate-900 font-bold mb-1">
            Calculando seu índice de massa corporal
          </p>
          <p className="text-sm text-slate-700">
            IMC - índice de massa corporal, é usado como um fator de risco para
            vários problemas de saúde.
          </p>
        </div>
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

export default Question18;
