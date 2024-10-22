"use client";

import React, { useState } from "react";
import ButtonContinue from "@/components/buttonContinue";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";
import Input from "@/components/input";

const Question19 = ({ onClick }: { onClick: (value: number) => void }) => {
  const [btnValue, setBtnValue] = useState<number | null>(null);

  const handleOnChange = (value: string) => {
    setBtnValue(parseInt(value));
  };

  const validConditions = Boolean(
    btnValue && btnValue && btnValue > 16 && btnValue < 99
  );

  return (
    <Card>
      <CardTitle title="Qual a sua idade?" />
      <CardDescription description="" />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center ml-[-70px]">
          <Input
            name="idade"
            onChange={handleOnChange}
            placeholder="0"
            value={btnValue}
          />
        </div>
        <div className="bg-softGrey mx-3 mt-10 px-4 py-4 rounded-lg text-left ">
          <p className="text-sm text-slate-900 font-bold mb-1">
            Perguntamos a sua idade para criar um plano personalizado
          </p>
          <p className="text-sm text-slate-700">
            À medida que envelhecemos, nossos corpos tendem a acumular mais
            gordura corporal do que indivíduos mais jovens com o mesmo IMC.
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

export default Question19;
