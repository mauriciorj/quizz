"use client";

import React, { useState } from "react";
import ButtonContinue from "@/components/buttonContinue";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";
import Input from "@/components/input";

const Question17 = ({
  onClick,
}: {
  onClick: (value: number | null) => void;
}) => {
  const [btnValue, setBtnValue] = useState<number | null>(null);

  const handleOnChange = (value?: string) => {
    if (value === "") {
      return setBtnValue(null);
    }
    if (value && !isNaN(parseInt(value))) {
      return setBtnValue(parseInt(value));
    }
  };

  const validConditions = Boolean(
    btnValue && btnValue && btnValue > 100 && btnValue < 230
  );

  return (
    <Card>
      <CardTitle title="Qual a sua altura (em cm, exemplo: 172 para 1,72m) ?" />
      <CardDescription description="" />
      <div className="flex flex-col items-center">
        <div className="ml-[-30px]">
          <Input
            name="altura"
            onChange={handleOnChange}
            placeholder="0"
            unit="cm"
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
            label="Cotinuar"
            onClick={() => onClick(btnValue)}
          />
        </div>
      </div>
    </Card>
  );
};

export default Question17;
